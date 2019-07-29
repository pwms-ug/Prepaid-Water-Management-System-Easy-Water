#include "defs.h"
void setup() {
  lcd.init();
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  pinMode(SolenoidPin, OUTPUT); 
  Serial.begin(9600);
  int i;
  for(i=0;i<25;i++){
      if(UsedTokens[i] == 0){
        Serial.print("UsedTokenIndex ");
        Serial.print(i);
        Serial.println(" is empty");
      }
    }
//  char* code = (char*)"AD5DBC065123456D";
}

void loop() {
  if(units == 0.0){
    if(!closed){
      closeValve();
    }
  } else {
    if(closed){
      openValve();
    }
  }
  if (act_start > 0) {
    if ((act_start + 5000) <= millis()) {
      lcd.clear();
      act_start = 0;
      memset(input, 0, sizeof(input));
      count=0;
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
          units += 10;
          lcd.print("Activated");
          activated = true;
          delay(1000);
        } else {
          count = 0;
          display = true;
          lcd.setCursor(0, 0);
          lcd.print("Invalid");
          memset(input, 0, sizeof(input));
        }
      } else {
        count = 0;
        display = true;
      }
    }
    if (count == 16) {
      if (activated) {
        input[16] = '\0';
        lcd.clear();
        lcd.setCursor(0, 1);
        lcd.print("Verifying..");
        if(usedToken(input)){
          lcd.setCursor(0,0);
          lcd.print("Used token");
          count=0;
          memset(input, 0, sizeof(input));
          display = true;
          delay(1000);
        } else {
          Verify(input, unit);
          count = 0;
          display = true;
        }
      } else {
        lcd.clear();
        lcd.setCursor(0, 0);
        count = 0;
        lcd.print("Not Activated");
        memset(input, 0, sizeof(input));
        display = true;
      }
    }
  }
  if (display) {
    display = false;
    lcd.clear();
    lcd.setCursor(11, 1);
    lcd.print(units);
  }
}

char decoded[17];
char* decrypt(char* token)
{
    int len = strlen(token),len1, len2, len3, len4, len5, len6;
    char *s3, *s4, *s5, *s6;
    len1 = len / 2;
    len2 = len - len1;
    len3 = len1 / 2;
    len4 = len1 - len3;
    len5 = len2 / 2;
    len6 = len2 - len5;
    s3 = (char*)malloc(len3 + 1);
    memcpy(s3, token, len3);
    s3[len3] = '\0';
    s4 = (char*)malloc(len4 + 1);
    memcpy(s4, token + len3, len4);
    s4[len4] = '\0';
    s5 = (char*)malloc(len5 + 1);
    memcpy(s5, token + len3 + len4, len5);
    s5[len5] = '\0';
    s6 = (char*)malloc(len6 + 1);
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
  char verify[7];
  if (strncmp(input, deviceId, 6) == 0) {
    ptrChar += 6;
    count = 0;
    int lop = 5;
    while (lop != 0) {
      unt[num] = input[ptrChar];
      ptrChar++;
      num++;
      lop--;
    }
    num = 0;
    unt[5] = '\0';
    int ver = 5;
    while(ver != 0) {
      verify[num] = input[ptrChar];
      ptrChar++;
      num++;
      ver--;
    }
    verify[5] = '\0';
    int i = 0;
    sscanf(unt, "%d", &x);
    unit = x/100.00;
    units += unit;
  } else {
    lcd.clear();
    count = 0;
    lcd.print("Unknown SSID");
    memset(input, 0, sizeof(input));
    delay(3000);
    display = true;
  }
}

boolean usedToken(char* token) {
  boolean found = false;
  int i;
  Serial.println(token);
  for(i=0;i<25;i++) {
    if(strcmp(UsedTokens[i], token) == 0) {
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Used token");
      found = true;
      return true;
      delay(5000);
    }
  }
  if(found){
    count=0;
    memset(input, 0, sizeof(input));
    display = true;
  }
  return false;
}

void closeValve() {
  digitalWrite(SolenoidPin, LOW);
}

void openValve() {
  digitalWrite(SolenoidPin, HIGH);
}
