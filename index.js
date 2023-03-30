let passEl = document.getElementById("password-el")


let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?","/"]

 
let passwordLength = 12


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function genPass(){
    const generatedPassword = generateRandomPassword()
passEl.textContent = generatedPassword
}


const value = document.querySelector("#value")
const input = document.querySelector("#lenght-selector")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})


var slider = document.getElementById("lenght-selector");


slider.oninput = function() {
    passwordLength = this.value;
}

const symbolsCheckbox = document.getElementById("symbols-cb")

function addSymbols(){
    if (symbolsCheckbox.checked === false){
        return characters = letters
    } else if (symbolsCheckbox.checked === true) {
        return characters = characters.concat(symbols)
    }
}

function copyPass(){
    var value = document.getElementById("password-el").innerHTML
    navigator.clipboard.writeText(value);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: value + ' - Copied To Clipboard'
      })
  }
