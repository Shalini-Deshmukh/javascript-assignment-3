// program to check the number is even or odd
// take input from user
let num = prompt("Enter a number: ");

//check if the number is even
if(num % 2 == 0) {
    alert("The number is even.");
}
else{
   alert("The number is odd.");  
}

//program to cheak the greater number amongst two numbers

let number1=Number(prompt("enter first number:"));
let number2=Number(prompt("enter second number:"));
if(number1>number2){
    alert("The first number is greater than the second number");
}
else{
    alert("The second number is greater than the first number");
}


//program that ask the user for a number

let number=prompt("enter a number:");
if(10>number){
    alert("the number is less than 10")
}
else if(10<number){
    alert("the number is greater than 10")
}
else if(10==number){
    alert("the number is equal to 10")
}


//write a program that prints numbers from 1 to 10
for(var input=1; input<=10; input++){
    console.log(input);
}

//program that prints even numbers from 1 to 10
for(var input=0; input<=10; input+=2){
    console.log(input)
}

//program that prints odd numbers from 1 to 10
for(var input=1; input<=10; input+=2){
    console.log(input)
}

   


