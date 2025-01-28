Preview: https://light-buib.netlify.app/


public class JavaExceptionExample{  
  public static void main(String args[]){  
   try{  
      //code that may raise exception  
      int data=100/0;  
   }catch(ArithmeticException e){System.out.println(e);}  
   //rest code of the program   
   System.out.println("rest of the code...");  
  }  
}


public class ArithmeticExceptionExample {  
    public static void main(String[] args) {  
        int dividend = 10;  
        int divisor = 0;  
        try {  
            int result = dividend / divisor; // Division by zero  
            System.out.println("Result: " + result);  
        } catch (ArithmeticException e) {  
            System.out.println("Error: Division by zero is not allowed.");  
            // Additional error handling code can be added here  
        }  
    }  
}
