package com.company;

import java.util.Scanner;

public class practice4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        Solution 1
//        int a = 10;
//        if(a ==11){
//            System.out.println("I am 11");
//        }else{
//            System.out.println("i am not 11");
//        }

//        Problem 2
//        System.out.println("Enter marks of 3 subjects");
//        int marks1 = sc.nextInt();
//        int marks2 = sc.nextInt();
//        int marks3 = sc.nextInt();
//
//        int total = 100;
//        float totalPercent = (marks1 + marks2 + marks3)*100.0f/(total*3);
//        System.out.println(totalPercent);
//
//        if(totalPercent>=40){
//            if((marks1*100)/total>=33 && (marks2*100)/total>=33 && (marks3*100)/total>=33 ){
//                System.out.println("PASS");
//            }else{
//                System.out.println("FAIL");
//            }
//        }else{
//            System.out.println("FAIL");
//        }

//        Problem 3
//        System.out.println("Enter your income :");
//        float tax=0;
//        float income = sc.nextFloat();
//
//        if(income<=2.5f){
//            tax = tax +0;
//        }
//        else if(income>2.5f && income<=5.0f){
//            tax = tax + 0.05f * (income - 2.5f);
//        }
//        else if(income>5.0f && income<=10.f){
//            tax = tax + 0.05f * (5.0f - 2.5f);
//            tax = tax + 0.2f * (income - 5.0f);
//        }
//        else if(income>10.0f){
//            tax = tax + 0.05f * ( 5.0f - 2.5f);
//            tax = tax + 0.2f * ( 10.0f - 5.0f);
//            tax = tax + 0.3f * ( income - 10.0f);
//        }
//
//        System.out.println("Tax to be paid: " + tax);

//        PROBLEM 4
//        System.out.println("Enter number");
//        int n = sc.nextInt();
//        switch (n){
//            case 0 : System.out.println("SUNDAY");
//                break;
//                case 1 : System.out.println("MONDAY");
//                break;
//                case 2 : System.out.println("TUESDAY");
//                break;
//                case 3 : System.out.println("WEDNESDAY");
//                break;
//                case 4 : System.out.println("THURSDAY");
//                break;
//                case 5 : System.out.println("FRIDAY");
//                break;
//                case 6 : System.out.println("SATURDAY");
//                break;
//            default:
//                System.out.println("INVALID INPUT");
//        }

        System.out.println("Enter year: ");
        int year = sc.nextInt();

        if(year%100==0 && year%400==0){
                System.out.println("LEAP YEAR");
            }

        else if(year%100!=0 && year%4==0){
                System.out.println("LEAP YEAR");
            }
        else{
                System.out.println("NOT LEAP");
            }
        }
    }
