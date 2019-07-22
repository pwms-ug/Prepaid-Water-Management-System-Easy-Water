#include "stdio.h"
#include "string.h"

volatile long long int flow_frequency;
boolean working;
int working;
float lpms;
unsigned char flowsensor;
unsigned long cTime;
unsigned long clTime; // loop time

/* Counts the number of litres flowing per second
 */
void count_litres()
{ // Interrupt function;
    working = 1;
    flow_frequency++;
    working = 0;
}

/* Used to declare the water flow sensor pin to the library
 * @params inputpin
 */
void declare(int inputpin)
{
    flowsensor = inputpin;
}

/* Encodes the litres per 500 microseconds
 * in the variable lps
 */
float ltrs_p_s(int Tm)
{
    cTime = Tm;
    int count = 0;
    if (cTime >= (clTime + 1000))
    {
        for (count = 0; count < 1000; count++)
        {
            count_litres();
        }
        clTime = cTime; // Updates Loop Time
        lpms = (flow_frequency / 60 / 7.5);
        return lpms;
    }
    return lpms;
}

void main()
{
    clTime = millis();
    int sensor = 2;
    declare(sensor);
    float old_lt = 0;
    while (1)
    {
        float lt = ltrs_p_s(millis());
        if (lt != 0)
        {
            if (lt != old_lt)
            {
                printf("\nLitres: %.4f\n", lt);
            }
            if(lt >= 1000) break;
            old_lt = lt;
        }
    }
}