******Loops

Looping control flow allows us to go back to some point in the program where
we were before and repeat it with our current program state. If we combine this
with a variable that counts, we can do something like this:

var number = 0;

while (number <= 12) {

  console.log(number);

  number = number + 2;

}

*while creates a loop
*while is followed by an expression in parentheses and then a statement
*The loop executes that statement as long as the expression produces a value that is
true when converted to Boolean type.

*A sequence of statements wrapped in braces is called a block.

*Every time the loop repeats, number is incremented by 2. Then, at the beginning of
every repetition, it is compared with the number 12 to decide whether the program
has done all the work it intended to do.

*while loop

program that calculates and shows the value of 2 (10) (2 to the 10th power). We use two
variables: one to keep track of our result and one to count how often we have
multiplied this result by 2. The loop tests whether the second variable has reached
10 yet and then updates both variables.

var result = 1;

var counter = 0;

while (counter < 10) {

  result = result * 2;

  counter = counter + 1;

}

console.log(result);

// → 1024

**for loop

The do loop is a control structure similar to the while loop.
It differs only on one point: a do loop always executes its body at least once,
and it starts testing whether it should stop only after that first execution. To
reflect this, the test appears after the body of the loop:

do {

  var yourName = prompt("Who are you?");

} while (!yourName);

console.log(yourName);




