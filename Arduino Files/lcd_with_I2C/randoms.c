#include <string.h>
#include <stdio.h>
#include <stdlib.h>

char *codemaker(int length) {
  const char *string = "ABCD0123456789";
  size_t stringLen = strlen(string);
  char *randomString = NULL;


  if (length < 1) {
    length = 1;
  }

  randomString = (char*)(malloc(sizeof(char) * (length + 1)));

  if (randomString) {
    short key = 0;

    for (int n = 0; n < length; n++) {
      key = rand() % stringLen;
      randomString[n] = string[key];
    }

    randomString[length] = '\0';
    return randomString;
  }
  else {
    printf("No memory");
    exit(1);
  }
}
