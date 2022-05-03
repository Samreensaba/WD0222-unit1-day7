/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 1). Number: Using this datatype we can store any kind of number such as floating-point or integer and it also store special character like +infinity and -infinity. There is also a special NAN(not a number) type which is a result when an arithematic operation is performed with a string and a number.
2). String: Any textual elements is declared as string. String can be written using "", '',``. eg: "abcd", 'abcd', `abcd` all of these are strings.
3). Undefined: When the variable is defined but no value is assigned to that variable then it is undefined. This means we dont know if it is empty or contains any value.
4). Null: We can empty the variable using null. it means the variable is empty.
5). Boolean: It only contains two values true or false. It is used when logical decesion is required. */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variable is like a container or a storage box where we can store our data. Data can be of any type ex: number, string etc. After naming a variable we can assing value to that variable orelse it will be undefined. Variable can be defined using "let" and it is case sensitive*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* console.log(12 + 20) */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* let x = 12
console.log(x) */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* let name = "John Doe"
console.log(name) */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* console.log(12 - x)*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* let name1
let name2
name1= "john"
name2= "John"
console.log("Is name1 and name2 same?", name1 === name2)
console.log("Is name1 and name2 same?", name1 === name2.toLowerCase()) */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* let x = 8
 */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* let Age = 30
let ModelElg
if (Age >= 30){
ModelElg = "not eligible";
}
else{
    ModelElg = "eligible";
}
console.log("********Ternary Operator********")
let ModelEligibility = (Age <30)? "Eligible" : "not eligible";
console.log(ModelEligibility) */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
console.log(12 + 20)
let x = 12
console.log(x)
let name = "John Doe"
console.log(name)
console.log(12 - x)
let name1
let name2
name1= "john"
name2= "John"
console.log("Is name1 and name2 same?", name1 === name2)
console.log("Is name1 and name2 same?", name1 === name2.toLowerCase())
let Age = 30
let ModelElg
if (Age >= 30){
ModelElg = "not eligible";
}
else{
    ModelElg = "eligible";
}
console.log("********Ternary Operator********")
let ModelEligibility = (Age <30)? "Eligible" : "not eligible";
console.log(ModelEligibility)