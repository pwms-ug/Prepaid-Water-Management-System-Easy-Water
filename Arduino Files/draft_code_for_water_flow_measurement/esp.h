// esp.h
// c
#include <stdio.h>
#include "string.h"
#ifndef ESP_H
#define ESP_H

volatile int flow_frequency;
//boolean working;
int working;
int lpms;
unsigned char flowsensor;
unsigned long cTime;
unsigned long clTime; // loop time

/* Counts the number of litres flowing per second
 */


/* Used to declare the water flow sensor pin to the library
 * @params inputpin
 */
void declare(int inputpin) {
    flowsensor = inputpin;
}

/* Encodes the litres per 500 microseconds
 * in the variable lps
 */
long int ltrs_p_s(int Tm) {
    
}


#endif //ESP_H
