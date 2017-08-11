console.log("Strings.js, YO!");

let letterInput = document.getElementById("letterInput");
let btnPush = document.getElementById("btnPush");
let lettersOnly = /^[a-zA-Z]+$/;
let contentPlaceholder1 = document.getElementById("contentPlaceholder1");
let contentPlaceholder2 = document.getElementById("contentPlaceholder2");
let contentPlaceholder3 = document.getElementById("contentPlaceholder3");

function reversal(str) {
    let reverse = str.split("").reverse().join("");
    // console.log(reverse);
    let newLine = document.createElement("p");
    contentPlaceholder1.innerHTML = `<p><b>Your word reversed:</b> ${reverse}</p>`;
    }
    
function alphabits(str) {
    let alphabetize = str.split('').sort().join('');
    // console.log(alphabetize);
    contentPlaceholder2.innerHTML = `<p><b>The letters in your word alphabatized:</b> ${alphabetize}</p>`;
        }

function palindrome(str) {
    if (str == str.split('').reverse().join('')){
        contentPlaceholder3.innerHTML = `<h2>Your string is a palidrome</h2>`;
    }else{
        console.log("Failure! ABORT!");
    }
  }

function runIt(){
    contentPlaceholder1.innerHTML = "";
    contentPlaceholder2.innerHTML = "";
    contentPlaceholder3.innerHTML = "";
    var inputValue = letterInput.value;
    if(inputValue.match(lettersOnly))
        {
            console.log("We've got letters!!!");
            alphabits(inputValue);
            reversal(inputValue);
            palindrome(inputValue);
        }
        else{
            alert("Please enter only alphabets, Yo!");
        }
};

btnPush.addEventListener("click", runIt);
letterInput.addEventListener('keyup', function (pushEnter) {
    if (pushEnter.which === 13) {
        runIt();
    }
})