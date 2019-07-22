#include <Keypad.h>

const byte Rows = 4;
const byte Cols = 4;

char keys[Rows][Cols] = 
{
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[Rows] = {'9','8','7','6'};
byte colPins[Cols] = {'5','4','3','2'};

Keypad keypad = Keypad(makeKeymap(keys),rowPins,colPins,Rows,Cols);
void setup() {
  Serial.begin(9600);
  Serial.println("Keys");
}

void loop() {
  char key = keypad.getKey();
  if(key != NO_KEY) {
    Serial.println(key);
  }
}
