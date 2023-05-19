const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]



let generatedPasswordOne = document.getElementById("password-spOne")
let generatedPasswordTwo = document.getElementById("password-spTwo")
let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click",function(){
    const inputField = document.querySelector('#input-field').value
    let passwordOne =""
    let passwordTwo = ""
    for (let i = 0 ; i<inputField ;i++){
        passwordOne += characters[Math.floor(Math.random()*characters.length)]
        passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    generatedPasswordOne.textContent = passwordOne
    generatedPasswordTwo.innerHTML = passwordTwo
})

function disp(){
    let custom = document.getElementById('custom-container')
    if(custom.style.display == 'none'){
        custom.style.display = 'block'
    }
    else if(custom.style.display == 'block'){
        custom.style.display ='none'
    }
    console.log('cusotm')
}
let include = []
function customGenerate(){
    console.log(include)
    let n = document.getElementById('num').checked
    let a = document.getElementById('alpha').checked
    let s = document.getElementById('special').checked
    if (n){
        include.push(...nums)
    }
    if (a){
        include.push(...alphabets)
    }
    if(s){
        include.push(...special)
    }
    console.log(include)
    const inputField = document.querySelector('#input-field').value
    let passwordOne =""
    let passwordTwo = ""
    for (let i = 0 ; i<inputField ;i++){
        passwordOne += include[Math.floor(Math.random()*include.length)]
        passwordTwo += include[Math.floor(Math.random()*include.length)]
    }
    generatedPasswordOne.textContent = passwordOne
    generatedPasswordTwo.innerHTML = passwordTwo

}
