#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char* tokenize(char* data);
char* decrypt(char* token);
char* codes;
double unit = 0.00;
double units = 0.00;
char* code;
int main()
{
    char* code = (char*)"AD5DBC65123456DB";
    codes = tokenize(code);
    printf("Code: %s", code);
    printf("\nToken: %s", codes);
    printf("\nDecrypted: %s", decrypt(codes));
    return 0;
}

char finalString[17], decoded[17];
char* tokenize(char* data)
{
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
