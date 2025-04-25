/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

function remove(s, n) {
    let count = 0;
    let result = "";
  
    for (let char of s) {
      if (char === "!" && count < n) {
        count++;
      } else {
        result += char;
      }
    }
    
    return result;
  }

  console.log(remove("!!!Hi !!hi!!! !hi", 3));
  console.log(remove("!!!Hi !!hi!!! !hi", 5));
  console.log(remove("!!!Hi !!hi!!! !hi", 9));
