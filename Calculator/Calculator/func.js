


//first connect to res field input
function Solve(val) {
   var v = document.getElementById('res');

   v.value += val;//  to add the button when click in the feild
                  // v. value for current value inside field val to calculate the values
}



function Result() {
   var num1 = document.getElementById('res').value;
   try {                                            // to see in res if see x/to evaluate x to change to x to * 
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;  // if con eval it can display to 'res' or feild
   } catch {
      document.getElementById('res').value = 'Error';// error if incorrect input
   }
}



function Clear() {
   var inp = document.getElementById('res'); // for function C btn if press it will clear all
   inp.value = ''; //empty string
}




// for keyboard 
document.addEventListener('keydown', function (event) { // to allow it to use the keyboard when press it will display
   const key = event.key;// to get actual what u press
   const validKeys = '0123456789+-*/.%'; // only keys u can press
   if (validKeys.includes(key)) { 
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') { // result
      Result();
   } else if (key === 'Backspace') {  //backspace
      Back();
   } else if (key.toLowerCase() === 'c') { //to clear
      Clear();
   }
});