package com.company;
import java.util.Scanner;

public class practice5 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        /* Problem 1
        for(int i =4; i>0; i--){
            for(int j=i;j>0;j--){
                System.out.print("* ");
            }
            System.out.println();
        }
         */

//        Problem 7
        /*
        int i =0;
        while(i<4){
            int j= 4-i;
            while(j>0){
                System.out.print("* ");
                j--;
            }
            System.out.println();
            i++;
        }
        */

//        Problem 2
//        Sum of first n even numbers = n*(n+1)

        System.out.println("Enter the value of n: ");
        int n = sc.nextInt();
        int sum =0;
        int i =1;
        while(n!=0){
            if(i%2==0) {
                sum = sum + i;
//                n--;
            }
            i++;
        }
        System.out.printf("Sum of first %d even numbers is : %d",n, sum);



//        Problem 5
//        System.out.println("Enter the value of n: ");
//        int n = sc.nextInt();
//        int fact = 1;
//        for (int i=1; i<=n; i++){
//            fact = fact * i;
//        }
//        int i =1;
//        while(i<=n){
//            fact *= i;
//            i++;
//        }
//        System.out.println("Factorial is : " + fact);

        //Problem 9
//        int i =1;
//        int n =8;
//        int sum =0;
//        for(int i =1;i<=10;i++){
//            System.out.println(sum);
//            sum = sum + (n*i);
//        }
//        System.out.println("Final sum is : " + sum);
    }
}
