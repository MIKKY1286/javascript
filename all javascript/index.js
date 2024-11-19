 let num = 9
 num += 10
 num += 20


alert('welcome home')


 const name = 'mikky'


 let message = `'hi' ${userName}, your ${product}, cost  ${price}`


 console.log(message)

 const trafficLight = 'red'

 const containerEL = document.getElementById('container')

 // modified


 if(trafficLight == 'green '){
    containerEL.style.backgroundColor = 'green'
 } else if(trafficLight == 'yellow'){
    containerEL.style.backgroundColor = 'yellow'
 } else if(trafficLight == 'red'){
    containerEL.style.backgroundColor = 'red'
 } else{
    containerEL.style.backgroundColor = 'black'
 }





    // textcontent, innertext, innerHTML

    messageEL.textContent += 'welcome to class'
    messageEL.textContent += ''


    // change content

    const inputEL = document.getElementById('input-el')
    const messageEL = document.getElementById('text')
    const inputVal = inputEL.value
    console.log(inputEL.value)



    //fuction

    // function toggle(){



    //     let input=document.getElementById('box')
    //     console.log(input.style);

    //     input.type=='text'?input.type="password":input.type='text'
    // }


    // let.age = 0
    // age = 10
    // age = 14

    // console.log(input.style);

    //             // condition tree
    // if(10<3){
    //     console.log('welcome');
    // }
    // else if(10>3){
    //     console.log('byebye');
    // }
    // else if(4 >3){
    //     console.log('butter');
    // }
    // else if(5==='boy'){
    //     console.log('stay');
    // }
    // else{
    //     console.log('no conditon met');
    // }


    function display(){
        console.log('welcome');
    }


    function showText(){
        const inputVal = input.value
        thedisplay.textContent = inputVal
    }

    const input = document.getElementById('the-input')

const theButton = document.getElementById('the-button')

    const thedisplay = document.getElementById('the-display')