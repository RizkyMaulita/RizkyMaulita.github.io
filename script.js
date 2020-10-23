const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const link = document.getElementById('link')

function checkPassword(password) {
  if(password.length < 7){
    return false
  }
  let symbol = '~!@#$%%^&*()-+{}[]|/:;,.'
  let dictLow = 'abcdefghijklmnopqrstuvwxyz'
  let dictHigh = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let num = '1234567890'
  let flagSymbol = false
  let flagLow = false
  let flagHigh = false
  let flagNum = false
  for (let i = 0; i < password.length; i++){
    for (let j = 0; j < symbol.length; j++){
      if(password[i] === symbol[j]){
        flagSymbol = true
        break
      }
    }
    for(let k = 0; k < dictLow.length; k++){
      if (password[i] === dictLow[k]){
        flagLow = true
        break
      }
    }
    for (let m = 0; m < dictHigh.length; m++){
      if (password[i] === dictHigh[m]){
        flagHigh = true
        break
      }
    }
    for (let n = 0; n < num.length; n++){
      if(password[i] === num[n]){
        flagNum = true
        break
      }
    }
  }
  if (flagLow && flagHigh && flagNum && flagSymbol){
    return true
  }
  return false
}

function checkEmail(email) {
  let domain = ['com','co.id','org']
  let flagLength = false
  let flagDomain = false
  let strDomain = ''
  for (let i = 0; i < email.length; i++){
    if(email[i] === ' '){
      return false
    }
    if(email[i] === '@' && i > 3){
      flagLength = true
    }
    if (flagLength && email[i - 1] === '.'){
      flagDomain = true
    }
    if (flagDomain){
      strDomain += email[i]
    }
  }
  flagDomain = false
  for (let i = 0; i < domain.length; i++){
    if (strDomain === domain[i]){
      flagDomain = true
    }
  }
  console.log(strDomain);
  if (flagDomain && flagLength){
    return true
  }
  return false
}

form.addEventListener('submit',(e)=>{
  if(name && checkEmail(email.value) && checkPassword(password.value)){
    alert(`Hi ${name.value}! You have successful created your account.`)
    link.innerHTML = `Hi ${name.value}! <br> Please visit the following link to get the trip package you want <br> <a href="category.html"> Package Trip </a>`
  }
  if(!checkEmail(email.value) && !checkPassword(password.value)){
    alert(`There are something wrong. Please check your email and password`)
  }else if(!checkPassword(password.value)){
    alert('Password must have more than 6 characters and must contain characters alphabet, number and symbol')
  }else if(!checkEmail(email.value)){
    alert(`For sign up, using email with domain .com or .org or co.id and Please make sure your email doesn't contain space and username in your email more than 3 characters`)
  }
  e.preventDefault()
})