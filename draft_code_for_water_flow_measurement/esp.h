// esp.h
// c
#include <stdio.h>
#include "string.h"
#ifndef ESP_H
#define ESP_H

volatile int flow_frequency;
//boolean working;
int working;
unsigned long lpms;
unsigned char flowsensor;
unsigned long cTime;
unsigned long clTime; // loop time

/* Counts the number of litres flowing per second
 */
void count_litres(){  // Interrupt function;
    working = 1;
    flow_frequency++;
    working = 0;
}

/* Used to declare the water flow sensor pin to the library
 * @params inputpin
 */
void declare(int inputpin) {
    flowsensor = inputpin;
}

/* Encodes the litres per 500 microseconds
 * in the variable lps
 */
unsigned long ltrs_p_s(int Tm) {
  while(1){
    cTime = Tm;
    if(cTime >= (clTime + 1000)) {
        clTime = cTime; // Updates Loop Time
        lpms = (flow_frequency / 60 / 7.5);
        flow_frequency = 0;
        return lpms;
    }
  }
}


#endif //ESP_H
