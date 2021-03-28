window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    let changesize = document.querySelector('.changesizebutton');
let mainbox = document.querySelector('.mainbox');
let size = 5;


create(size);

// document.addEventListener('keypress', switchview);

// function switchview(e) {
//     let el = document.querySelector('.pa-carousel-widget');
//     console.log(el.style.display )
//     if(e.code == 'space'){
//        // if(el.style.display ==null){
//             document.querySelector('.grid-sizer').style.display = 'none'
//             el.style.display = 'block';
//             console.log(` ${e.code}`);
//             console.log(el)
//         //}
//     }

// }

mainbox.addEventListener('mouseover',(event)=>{
    
    // console.log(event.target.className.split(" "))
    if( event.target.className.split(" ").indexOf('boxes') > -1){
        event.target.style.backgroundColor = `#${Math.ceil((Math.random() * 1000000))}`
        event.target.classList.toggle('changesizegrow');
    }

})


function randomPickergrowth(){
    // console.log(`._${Math.ceil((Math.random() * (size*size)))}`) 
   let random = randomnumbersgenerator()
   let growbox1 = document.getElementsByClassName(`_${random[0]}`)[0];
   let growbox2 = document.getElementsByClassName(`_${random[1]}`)[0];
   let growbox3 = document.getElementsByClassName(`_${random[2]}`)[0];
   let growbox4 = document.getElementsByClassName(`_${random[3]}`)[0];

//    let growbox = document.getElementsByClassName(`_${Math.ceil((Math.random() * (size*size)))}`)[0];
   let ungrowbox1 = Array.from(document.getElementsByClassName('changesizegrow1'));
   let ungrowbox2 = Array.from(document.getElementsByClassName('changesizegrow2'));
   let ungrowbox3 = Array.from(document.getElementsByClassName('changesizegrow3'));
   let ungrowbox4 = Array.from(document.getElementsByClassName('changesizegrow4'));
   
//    console.log(growbox,ungrowbox)
   ungrowbox1.forEach(element => {
    element.classList.toggle('changesizegrow1');
   });
   ungrowbox2.forEach(element => {
    element.classList.toggle('changesizegrow2');
   });
   ungrowbox3.forEach(element => {
    element.classList.toggle('changesizegrow3');
   });
   ungrowbox4.forEach(element => {
    element.classList.toggle('changesizegrow4');
   });

//    ungrowbox.classList.toggle('changesizeshrink');
   growbox1.classList.toggle('changesizegrow1');
//    console.log(createArrayofLinks()[rand(0,45)]);
   growbox1.setAttribute('src',createArrayofLinks()[rand(0,45)]) ;
   growbox2.classList.toggle('changesizegrow2');
   growbox2.setAttribute('src',createArrayofLinks()[rand(0,45)]) ;
   growbox3.classList.toggle('changesizegrow3');
   growbox3.setAttribute('src',createArrayofLinks()[rand(0,45)]) ;
   growbox4.classList.toggle('changesizegrow4');
   growbox4.setAttribute('src',createArrayofLinks()[rand(0,45)]) ;

}


function randomnumbersgenerator(count = 0,arr=[]){
    // console.log(count,arr)
    if (count==4){
        return arr;
    }else if(count <4) {
        arr.push(Math.ceil((Math.random() * (size*size))));
        count += 1;
        arr = randomnumbersgenerator(count,arr);
        return arr;
        
    }
    
}

// console.log(randomnumbersgenerator())

function randomPickershrink(){
    // console.log(`._${Math.ceil((Math.random() * (size*size)))}`) 

    let random = randomnumbersgenerator()
    let growbox1 = document.getElementsByClassName(`_${random[0]}`)[0];
    let growbox2 = document.getElementsByClassName(`_${random[1]}`)[0];
    let growbox3 = document.getElementsByClassName(`_${random[2]}`)[0];
    let growbox4 = document.getElementsByClassName(`_${random[3]}`)[0];
 
 //    let growbox = document.getElementsByClassName(`_${Math.ceil((Math.random() * (size*size)))}`)[0];
    let ungrowbox1 = Array.from(document.getElementsByClassName('changesizeshrink1'));
    let ungrowbox2 = Array.from(document.getElementsByClassName('changesizeshrink2'));
    let ungrowbox3 = Array.from(document.getElementsByClassName('changesizeshrink3'));
    let ungrowbox4 = Array.from(document.getElementsByClassName('changesizeshrink4'));
    
    // console.log(random,growbox1,growbox2,growbox3,growbox4)
    ungrowbox1.forEach(element => {
     element.classList.remove('changesizeshrink1');
    });
    ungrowbox2.forEach(element => {
     element.classList.remove('changesizeshrink2');
    });
    ungrowbox3.forEach(element => {
     element.classList.remove('changesizeshrink3');
    });
    ungrowbox4.forEach(element => {
     element.classList.remove('changesizeshrink4');
    });
 
 //    ungrowbox.classList.toggle('changesizeshrink');
    growbox1.classList.toggle('changesizeshrink1');
    growbox2.classList.toggle('changesizeshrink2');
    growbox3.classList.toggle('changesizeshrink3');
    growbox4.classList.toggle('changesizeshrink4');
  
}

// changesize.addEventListener('click',(event)=>{
//     let sizetest;
//     do{
//         sizetest = Number(prompt("Please input size range between 1-64"));
//     }while(sizetest<1 || sizetest>64||Number.isNaN(sizetest))

//     size = sizetest;
//     create(size);

    


// })
function createArrayofLinks(){
    let list = document.getElementsByTagName('object');
    let listfinal = Array.from(list).map((element)=>
        element.getAttribute('data')
    );
    // console.log(listfinal)
    return listfinal;
}
createArrayofLinks()
function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

  function generateColor () {
    // hex numbers 
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var color = '#';
// we will generate hex color with 6 digit length
for (var i = 0; i < 6; i++) {
    let index = rand(0,15);
   // Append hex value at the index
   color += hex[index];
}
return color;
};

function create(size){
    mainbox.innerHTML = "";
    let counterclass = 0;
    if(!(size<1 || size>64)){
        // mainbox.style.cssText = `grid-template-columns: repeat(${size}, auto);grid-template-rows: repeat(${size}, auto)`;
        for(let i = 1 ; i<= size; i++){
            for(let j = 1; j<=size; j++){
                let box = document.createElement('img');
                box.className = 'boxes';
                box.setAttribute('src',createArrayofLinks()[rand(0,45)]) ;
                box.classList.toggle('grid-item');
                // box.style.backgroundColor = `${generateColor()}`
                counterclass += 1;
                if(rand(1,100)%2==0){
                    box.classList.toggle('grid-item--width2'); 
                }
                if(rand(1,100)%4==0){
                    box.classList.toggle('grid-item--height2'); 
                }
                // else{
                //     box.classList.toggle('changesizegrow');
                // }
                box.classList.toggle(`_${counterclass}`)
                
                box.addEventListener('mouseleave',(event)=>{
                    // console.log(event.target.className.split(" "))
                    // console.log(event.target.className.split(" "))
                    // if( event.target.className.split(" ").indexOf('boxes') > -1){
                    //     event.target.style.backgroundColor = `#${Math.ceil((Math.random() * 1000000))}`
                        event.target.classList.remove('changesizegrow');
                    // }
                
                })
                mainbox.appendChild(box);
            }
            
        }
    }

if(counterclass == (size*size)){
    setInterval(() => {
        randomPickergrowth();
        
    
    }, 1000);

    // setInterval(()=>{
    //     randomPickershrink();
    // },1300);
}

}

});


