    ****Functions
    Functions are the bread and butter of JavaScript programming.

    The concept of wrapping a piece of program in a value has many uses o reduce repetition

    ****Defining a function

    variable definition where the value given to the variable happens to be a function.

    *square of a giving number

    var square = function(x) {

      return x * x;

    };

    console.log(square(12));

    // → 144

    //Starts with the keyword function

    //Functions have a set of parameters (in this case, only x)

    //Body statements that are to be executed when the function is called.

    //Function body must always be wrapped in braces

    **More than one parameter

    var makeNoise = function() {

      console.log("Pling!");

    };

    makeNoise();

    // → Pling!

    **Elevate to the 10th power

    var power = function(base, exponent) {

      var result = 1;

      for (var count = 0; count < exponent; count++) {

        result *= base;
      }

      return result;

    };

    console.log(power(2, 10));

    // → 1024

    *********
    Exercise function that returns the number times 2

    function double(number) {

      return number * 2;

    }

    double();


    *******Parameters and scopes

    The parameters to a function behave like regular variables, but their initial
    values are given by the caller of the function, not the code in the function
    itself.

    This “localness” of variables applies only to the parameters and to variables
    declared with the var keyword inside the function body.

    Variables declared outside of any function are called global, because they are
    visible throughout the program.

    It is possible to access such variables from inside a function, as long as
    you haven’t declared a local variable with the same name.

    The following code demonstrates this. It defines and calls two functions that
    both assign a value to the variable x. The first one declares the variable as l
    ocal and thus changes only the local variable. The second does not declare x
    locally, so references to x inside of it refer to the global variable x defined
    at the top of the example.

    var x = "outside";

    var f1 = function() {

      var x = "inside f1";

    };

    f1();

    console.log(x);

    // → outside

    var f2 = function() {

      x = "inside f2";

    };

    f2();

    console.log(x);

    // → inside f2

    ***Avoid global variables so that functions are treated as their own universe!









