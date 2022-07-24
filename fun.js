// Exercise 1
// The following function returns true if the parameter age is greater than 18.
// Otherwise, it asks for a confirmation and returns its result.

/*  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  } 

//   Solution
let Age = (age) =>(age >18)? true : confirm('Do you have your parents permission to access this page?'); 
console.log(Age(10)) */
//-------------------------------------
//Exercise 2
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result

/* const pow = (x, n) => {
    let result = x;
     for (let i = 1; i < n; i++) {
        result = result * x;
  }
    return result;
}
console.log(pow(5, 3)) */

// we see result 125 becouse (5,3)=> 5 * 5 * 5 = 125! 
//-------------------------------------
//Exercise 3
//1.Replace Function Expressions with arrow functions in the code:

/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
  ) */


//solution


/* let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
  }
  ask(
    "Do you agree?",
    () => { alert("You agreed.") },
    () => { alert("You canceled the execution.") }
  ) */


//--------------------------------
// Exercise 4
//1. Create an object calculator with three methods:
//2. read() prompts for two values and saves them as object properties.
//3. sum() returns the sum of saved values.
//4.mul() multiplies saved values and returns the result.

/* let calculator = {
    // ... your code ...
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() ); */

//Solution
//First step we write variable
//After we write sum function(sum function return rezult sum(A+B))
//Next we write multiply fanction(return tezults mul(A*B))
//Read function show rezult to as

// first we set the value (2,5)
// then these values are summed up => (2+5)
// then these values are multiply up => (2*5)
// then summation value is output => (7)
// then the value of the multiplication is displayed => (10)

/* let a,b
let calculator = {
    sum() {
        return a + b;
    },
    mul() {
        return a * b;
    },
    read() {
        a = +prompt('a?', 0);
        b = +prompt('b?', 0);
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */


//----------------------------------
// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?
//solution

/* let minNum = (min,max) =>{
    return min < max ? min:max
}
console.log(2,10) */