package com.company;

import java.util.Locale;

public class practice3 {
    public static void main(String[] args) {
        String str = "ShasHWAt";
        System.out.println(str.toLowerCase());
        String s = "Shashwat Srivastava is grt";
        String s1= s.replace(" ","_");
        System.out.println(s1);
        String st = "Dear <name>, thanks a lot";
        System.out.println(st.replace("<name>","shash"));

        System.out.println("\"Dear Rishabh, thanks a lot\"");
        String b = "        shash   ";
        System.out.println(b.trim());

    }
}
