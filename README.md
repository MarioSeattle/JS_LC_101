*javascript works with browsers, databases, apps etc

*js is a programng language

1.2 Primitive Data Types in JavaScript

*Explain the different primitive data types of JavaScript.

*Apply operations to different primitive data types.

*Convert values of strings to numbers.

*Convert values of numbers to strings.


***primitive data types
    Number

    String
    Boolean
    Null
    Undefined
    Symbol (ES6)

NaN stands for “not a number”, even though it is a value of the
number type. You’ll get this result when you, for example,
try to calculate 0 / 0 (zero divided by zero), Infinity, -
Infinity, or any number of other numeric operations
that don’t yield a precise, meaningful result.

Number.MAX_VALUE * 2

What would most likely be the result?

(Yes! Exceptionally large numbers get translated into infinity.)

****Strings

"Patch my boat with chewing gum"

'Monkeys wave goodbye'

Whenever a backslash (\) is found inside quoted text,
it indicates that the character after it has a special meaning.

Newline

"This is the first line\n And this is the second"

Concatenation

Strings cannot be divided, multiplied, or subtracted, but the +
operator can be used on them. It does not add, but it concatenates—
it glues two strings together. The following line will produce the
string "concatenate":

"con" + "cat" + "e" + "nate"

*****Template Literals

interpolation. In this case, backticks (`) are used as quotes.
Inside the backticks, you can run JavaScript expressions to add
to a string as long as it is inside curly braces preceded with a
(e.g.{expression}). For example, the string:

`Hello ${12}!` ----> Hello12!

(we would recommend using single quotes for literal strings.)

Great, single quotes needed to be escaped if the string is wrapped
in single quotes. Easier would be to just wrap them in double quotes.

xxxxxx'My dog's bone'

Yes!!  'My dog\'s bone'

******Boolean

    Comparisons

two values: true and false

console.log(3 > 2) // → true

console.log(3 < 2) // → false

uppercase letters are always
“less” than lowercase ones, so "Z" < "a" is true, and non-alphabetic
characters (!, -, and so on) are also included in the ordering.

Other similar operators are >= (greater than or equal to),
<= (less than or equal to), == (equal to), and != (not equal to).

console.log("Itchy" != "Scratchy") // → true

console.log(NaN == NaN) // → false Only one is not equal

    Logical operators

JavaScript supports three logical operators: and, or, and not.

AND
console.log(true && false) // → false
console.log(true && true) // → true

OR
console.log(false || true) // → true
console.log(false || false) // → false

|| has the lowest precedence, then comes &&,
then the comparison operators (>, ==, and so on), and then the rest.

1 + 1 == 2 && 10 * 10 > 50

 Conditional Operator

ternary, operating on three values.
It is written with a question mark and a colon, like this:

console.log(true ? 1 : 2); // → 1

console.log(false ? 1 : 2); // → 2

****Undefined and Null

null and undefined, that are used to denote the absence
of a meaningful value.

The difference in meaning between undefined and null is an
accident of JavaScript’s design, and it doesn’t matter most of
the time.


null has referred to an intentional lack of information,
whereas undefined is unintentional.



If a value is not intentionally specified at all, it will be
marked by default as:

(Undefined)


****Converting Types

console.log(8 * null) // → 0

console.log("5" - 1)  // → 4

console.log("5" + 1)  // → 51

console.log("five" * 2) // → NaN

console.log(false == 0) // → true


However, when null or undefined occurs on either side of the operator,
it produces true only if both sides are one of null or undefined.

console.log(null == undefined); // → true

console.log(null == 0); // → false

The rules for converting strings and numbers to Boolean values state
that 0, NaN, and the empty string ("") count as false, while all the
other values count as true.


I recommend using the three-character comparison operators defensively
to prevent unexpected type conversions from tripping you up.

*******Intentional Type Coercion

Strings to Numbers to Strings

Most often, the type coercion requires converting from strings to
numbers and back to a string. In order to convert strings to numbers,
 we would take a look at two functions, parseInt and parseFloat.

parseInt(string, int radix)

parseInt takes in a string and attempts to return it as an integer
(ie no decimals). If the first character is not a number
(or negative sign), the function will produce NaN.

parseInt('123')    // 123

parseInt('123abc') // 123

parseInt('a123')   // NaN

The second parameter is optional but recommended. In essence,
it returns the integer in the correct numeric base.

parseInt('123', 10) // 123

parseFloat works similarly to parseInt except it handles a floating
point number (ie a decimal number).

parseInt('123.456')    // 123

parseFloat('123.456')  // 123.456

parseFloat('a123.456') // NaN

Converting Numbers to Strings

Converting numbers to strings is just as easy as concatenation.
Simply concatenate the empty string to it like so.

'' + 546 // ﻿'546'

Just be wary of the automatic type coercion stated in the previous step.









