package ug.co.easywater.easywater;

import java.util.Arrays;

public class Tokenizer {
    public static String Dec_rypt() {
        //String Final="";
        //char s3[];
        char decoded[]=new char[17];
        String token=new String();
        int len1,len2,len3,len4,len5,len6;
        int len = token.length();

        len1 = len / 2;
        len2 = len - len1;
        len3 = len1 / 2;
        len4 = len1 - len3;
        len5 = len2 / 2;
        len6 = len2 - len5;

        char s3[] = new char[10];
        Arrays.copyOfRange(s3, Integer.parseInt(token), len3);
        s3[len3] = '\0';

        char s4[] = new char[10];
        Arrays.copyOfRange(s4, Integer.parseInt(token)+len3, len4);
        s4[len4] = '\0';

        char s5[] = new char[10];
        Arrays.copyOfRange(s5, Integer.parseInt(token)+len3+len4, len5);
        s5[len5] = '\0';

        char s6[] = new char[10];
        Arrays.copyOfRange(s6, Integer.parseInt(token)+len3+len4+len5, len6);
        s6[len6] = '\0';

        String a = String.valueOf(s5);
        String b = String.valueOf(s4);
        String c = String.valueOf(s3);
        String d = String.valueOf(s6);

        String e = String.valueOf(decoded);
        e = a.concat(b).concat(c).concat(d);



        return e;
    }

    public static void main(String[] args) {
        System.out.println(Tokenize());

    }

    public static String Tokenize(){
        final int DEVICE_ID = 2555; // A1
        final String RANDOM_NUMBER = "A3b4"; //B2
        final int METER_NUMBER =  1800; //A2
        final int PURCHASED_UNITS = 2378; //B1

        final String token;


        return "Hello World";
    }


}
