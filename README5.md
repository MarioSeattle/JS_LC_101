    *****For Loops

    for (var number = 0; number <= 12; number = number + 2)

      console.log(number);

    // → 0

    // → 2
    //   … etcetera

    The parentheses after a for keyword must contain two semicolons

    The part before the first semicolon initializes the loop, usually by defining a variable.

    The second part is the expression that checks whether the loop must continue.

    The final part updates the state of the loop after every iteration

    Shorter and clearer than a while construct.

    Here is the code that computes 210, using for instead of while:

    var result = 1;
    for (var counter = 0; counter < 10; counter = counter + 1)
      result = result * 2;
    console.log(result);
    // → 1024