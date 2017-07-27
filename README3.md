    Describe expressions and variables in JavaScript.
    Write examples of conditional statements in JavaScript including:
        if statements
        switch statements
    Write examples of loops in JavaScript including:
        while loops
        do while loops
        for loops
    Use the break and continue keyword.
    Write comments in JavaScript.

*****What are Expressions?

A fragment of code that produces a value is called an expression.

An expression between parentheses is also an expression, as is a
binary operator applied to two expressions or a unary operator applied
to one.

The simplest kind of statement is an expression with a semicolon after it.
This is a program:

1;

!false;

In some cases, JavaScript allows you to omit the semicolon at the end of a
statement. In other cases, it has to be there, or the next line will be
treated as part of the same statement.

****What are variables?

To catch and hold values, JavaScript provides a thing called a variable.

var caught = 5 * 5;

var indicates that this sentence is going to define a variable. followed
by the name of the variable and, if we want to immediately give it a value.

he value of such an expression is the value the variable currently holds.
Here’s an example:


he value of such an expression is the value the variable currently holds.
Here’s an example:

var ten = 10;

console.log(ten * ten); // → 100

They may not include spaces. Digits can also be part of variable
names—catch22 is a valid name, for example—but the name must not start
with a digit. A variable name cannot include punctuation, except for the
characters $ and _.


When a variable points at a value, that does not mean it is tied to that
value forever. The = operator can be used at any time on existing variables
to disconnect them from their current value and have them point to a new one.

var mood = "light"; console.log(mood); // → light

mood = "dark"; console.log(mood); // → dark

They do not contain values; they grasp them—two variables can refer to the
same value.

 A program can access only the values that it still has a hold on.

 Luigi still owes you, you create a variable. And then when he pays back $35,
 you give this variable a new value.

 var luigisDebt = 140;

 luigisDebt = luigisDebt - 35;

 console.log(luigisDebt);  // → 105

 A single var statement may define multiple variables. The definitions must be separated by commas.

 var one = 1, two = 2;

 console.log(one + two); // → 3

 *******If Statements


 Conditional execution

 Executing statements in straight-line order isn’t the only option we have.
 An alternative is conditional execution, where we choose between two different
 routes based on a Boolean value, like this:

 Conditional control flow

 we might want to show the square of the input only if the input is actually a number.

 var theNumber = parseInt("a123");

 if (isNaN(theNumber)) {

   theNumber = 10;

 }

 if executes or skips a statement depending on the value of a Boolean expression.

 isNaN function is a standard JavaScript function that returns true only if the argument
 it is given is NaN

 The Number function happens to return NaN when you give it a string that doesn’t
 represent a valid number.

 Thus, the condition translates to “unless theNumber is not-a-number, do this”.

 This alternate path is represented by the second arrow in the diagram. The else keyword can
 be used, together with if, to create two separate, alternative execution paths.

 var theNumber = parseInt("a123");

 if (isNaN(theNumber)) {

   theNumber = 10;

 } else {

   theNumber = theNumber + 5;

 }

  If we have more than two paths to choose from, multiple if/else pairs can be “chained”
  together. Here’s an example:
````
var theNumber = parseInt("a123");

if (isNaN(theNumber)) {

  theNumber = 10;

} else if (theNumber < 10) {

  theNumber = theNumber + 5;

} else {

  theNumber = theNumber - 5;

}

***Switch Statements

There is a construct called switch that is intended to solve such a “dispatch” in a more direct way.

switch (theWeather) {

  case "rainy":

    console.log("Remember to bring an umbrella.");

    break;

  case "sunny":

    console.log("Dress lightly.");

  case "cloudy":

    console.log("Go outside.");

    break;

  default:

    console.log("Unknown weather type!");

    break;
}



You may put any number of case labels inside the block
opened by switch. The program will jump to the label that
corresponds to the value that switchwas given or to default if
no matching value is found.