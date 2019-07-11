#include "esp.h"
int sensor = 2;
int litres_per_micro_second;
void setup() {
  // put your setup code here, to run once:
  declare(sensor);
  cTime = millis();
  attachInterrupt(0, count_litres, RISING);
  sei();
  cTime = millis();
  clTime = cTime;
}

void loop() {
   ltrs_p_s(millis());
   Serial.println(litres_per_micro_second);
}
