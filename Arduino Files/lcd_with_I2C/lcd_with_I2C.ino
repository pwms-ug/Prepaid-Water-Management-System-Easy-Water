#include "defs.h"
void setup() {
  lcd.init();
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  pinMode(SolenoidPin, OUTPUT); 
  Serial.begin(9600);
  delay(2000);
  time_t t = now();
  mySeed = second(t);
  char* code = (char*)"AD5DBC65123456DB";
  codes = tokenize(code);
  Serial.print("Act code: ");
  Serial.println(codes);
}

void loop() {
  digitalWrite(SolenoidPin, LOW);
  if (act_start > 0) {
    if ((act_start + 10000) <= millis()) {
      lcd.clear();
      act_start = 0;
      memset(input, 0, sizeof(input));
      display = true;
    }
  }
  key = keypad.getKey();
  if (key == NO_KEY) {
  } else {
    display = false;
    act_start = millis();
    if (count == 0) {
      lcd.clear();
      lcd.setCursor(0, 0);
    }
    lcd.print(key);
    if ((int)key != 35) {
      input[count] = key;
    }
    count++;
    if ((int)key == 42) {
      count--;
      input[count] = (char)NULL;
      count--;
      input[count] = (char)NULL;
      lcd.clear();
      lcd.print(input);
    }

    if ((int)key == 35) {
      if (!activated) {
        if (strcmp(input, "655") == 0) {
          count = 0;
          display = true;
          lcd.setCursor(0, 0);
          lcd.print("Activated");
          units += 10;
          activated = true;
          delay(2000);
          lcd.clear();
        } else {
          count = 0;
          display = true;
          lcd.setCursor(0, 0);
          lcd.print("Invalid");
          memset(input, 0, sizeof(input));
          delay(2000);
          lcd.clear();
        }
      } else {
        lcd.clear();
        display = true;
      }
    }
    if (count == 16) {
      if (activated) {
        input[16] = '\0';
        lcd.clear();
        lcd.setCursor(0, 1);
        lcd.print("Verifying..");
        Verify(input, unit);
      } else {
        lcd.clear();
        lcd.setCursor(0, 0);
        count = 0;
        lcd.print("Not Activated");
        memset(input, 0, sizeof(input));
        delay(2000);
        lcd.clear();
        display = true;
      }
    }
  }
  if (display) {
    display = false;
    lcd.setCursor(11, 1);
    lcd.print(units);
  }

}

char finalString[17];
char* tokenize(char* data) {
  int len = strlen(data);
  int len1 = len / 2;
  int len2 = len - len1;
  int len3 = len1 / 2;
  int len4 = len1 - len3;
  int len5 = len2 / 2;
  int len6 = len2 - len5;
  char *s3 = (char*)malloc(len3 + 1);
  memcpy(s3, data, len3);
  s3[len3] = '\0';
  char* s4 = (char*)malloc(len4 + 1);
  memcpy(s4, data + len3, len4);
  s4[len4] = '\0';
  char* s5 = (char*)malloc(len5 + 1);
  memcpy(s5, data + len3 + len4, len5);
  s5[len5] = '\0';
  char* s6 = (char*)malloc(len6 + 1);
  memcpy(s6, data + len3 + len4 + len5, len6);
  s6[len6] = '\0';
  strcat(finalString, s5);
  strcat(finalString, s4);
  strcat(finalString, s3);
  strcat(finalString, s6);
  free(s4);
  free(s5);
  free(s6);
  free(s3);
  return (char*) &*finalString;
}

char decoded[17];
char* decrypt(char* token)
{
    int len = strlen(token);
    int len1 = len / 2;
    int len2 = len - len1;
    int len3 = len1 / 2;
    int len4 = len1 - len3;
    int len5 = len2 / 2;
    int len6 = len2 - len5;
    char *s3 = (char*)malloc(len3 + 1);
    memcpy(s3, token, len3);
    s3[len3] = '\0';
    char* s4 = (char*)malloc(len4 + 1);
    memcpy(s4, token + len3, len4);
    s4[len4] = '\0';
    char* s5 = (char*)malloc(len5 + 1);
    memcpy(s5, token + len3 + len4, len5);
    s5[len5] = '\0';
    char* s6 = (char*)malloc(len6 + 1);
    memcpy(s6, token + len3 + len4 + len5, len6);
    s6[len6] = '\0';
    strcat(decoded, s5);
    strcat(decoded, s4);
    strcat(decoded, s3);
    strcat(decoded, s6);
    free(s4);
    free(s5);
    free(s6);
    free(s3);
    return (char*) &*decoded;
}

void Verify(char* codex, float unit) {
  char* input = decrypt(codex);
  int x;
  int ptrChar, num = 0;
  char unt[7];
  if (strncmp(input, deviceId, 6) == 0) {
    ptrChar += 6;
    count = 0;
    int lop = 4;
    while (lop != 0) {
      unt[num] = input[ptrChar];
      ptrChar++;
      num++;
      lop--;
    }
    unt[4] = '\0';
    ptrChar += 4;
    sscanf(unt, "%d", &x);
    unit = x/100.00;
    units += unit;
  } else {
    lcd.clear();
    count = 0;
    lcd.print("Unknown SSID");
    memset(input, 0, sizeof(input));
    delay(3000);
    lcd.clear();
    display = true;
  }
}
