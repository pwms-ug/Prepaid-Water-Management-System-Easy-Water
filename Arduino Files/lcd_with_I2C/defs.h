#ifndef DEFS_H
#define DEFS_H
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Keypad.h>
#include <string.h>
#include <Time.h>
#include "randoms.c"

LiquidCrystal_I2C lcd(0x27, 20, 4);
const byte Rows = 4;
const byte Cols = 4;
boolean display = true;
long act_start;
boolean activated=false;
char space[5]= {""};
char* codes;

char keys[Rows][Cols] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[Rows] = {9, 8, 7, 6};
byte colPins[Cols] = {5, 4, 3, 2};
int count = 0;
double unit = 0.00;
double units = 0.00;
char* code;
char input[100];
char* output;
char key;
long mySeed;
int SolenoidPin = 10; 
char *deviceId = (char*)"AD5DBC";

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, Rows, Cols);

#endif
