 const inputOne = document.getElementById('input1')
 const inputTwo = document.getElementById('input2')
 const answerEl = document.getElementById('ans-el')

 function calculate(){
    // const total = Number(inputOne.value) + Number(inputTwo.value) answerEl.textContent = total
 }

const screen = document.getElementById('screen')

 function appendToDisplay(char){
    screen.value += char
 }

 function clearDisplay(){
    screen.value = ''
 }