// Given that x = 8 and y = 3. 

x == y // false because 8 and 3 is not the same in value 
x && y < 10  // true because y < 10 is evaluated first. 
x || y =< 8  //  error because =< is not valid operator.
y === '3' // false because 3 is number type while '3' is string type.
!(x == 5) // true because x==5 is false, then ! convert it to true.