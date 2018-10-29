// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

//**Variables to access buttons & screen
var mathsCal = document.getElementById("maths");
var displayCal = document.getElementById("display");
var resetCal = document.getElementById("clear");
var equalsCal = document.getElementById("equals");

//**Display number when clicked
function formula(n){
  mathsCal.innerHTML +=n;
  displayCal.innerHTML = n;
}

//Calculate the equation
function equals() {
  var answer = eval(mathsCal.innerHTML);
  displayCal.innerHTML = parseFloat(answer);
}

//replace operator
function op() {
}

//Reset Display
resetCal.addEventListener("click", function(){
    mathsCal.innerHTML='';
    displayCal.innerHTML = '0';
})

//**Print clicked buttons
document.getElementById("seven").addEventListener("click", function(){
  formula("7");
});
document.getElementById("eight").addEventListener("click", function(){
  formula("8");
});
document.getElementById("nine").addEventListener("click", function(){
  formula("9");
});
document.getElementById("four").addEventListener("click", function(){
  formula("4");
});
document.getElementById("five").addEventListener("click", function(){
  formula("5");
});
document.getElementById("six").addEventListener("click", function(){
  formula("6");
});
document.getElementById("one").addEventListener("click", function(){
  formula("1");
});
document.getElementById("two").addEventListener("click", function(){
  formula("2");
});
document.getElementById("three").addEventListener("click", function(){
  formula("3");
});
document.getElementById("zero").addEventListener("click", function(){
  formula("0");
});
document.getElementById("point").addEventListener("click", function(){
  formula(".");
});
document.getElementById("divide").addEventListener("click", function(){
  formula("/");
});
document.getElementById("multiply").addEventListener("click", function(){
  formula("*");
});
document.getElementById("subtract").addEventListener("click", function(){
  formula("-");
});
document.getElementById("plus").addEventListener("click", function(){
  formula("+");
});
document.getElementById("equals").addEventListener("click", function(){
  equals();
});
