// Dichiaro un array images contente la struttura dati delle immagini;
const images =["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"]
 

console.log(images);
//Scrivo un ciclo for per ripetere l?operazione più volte qaunti sono i dati nell'array

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

const slideElem = document.querySelector(".items");

for (let i = 0; i < images.length; i++) {
    const curImage = images[i];
    console.log(slideElem);
//concateno il ciclo for con un template literal
if(i===0) {
slideElem.innerHtml += ` <div class="item active"> <img src"${curImage}"</div>`;
console.log("element")
} else {
    slideElem.innerHtml += ` <div class="item"> <img src"${curImage}"</div>`;
console.log("element")
}
}
let imageActive = 0;
document.querySelector(".next").addEventListener('click',function(){
    console.log('next');
    document.querySelector('.active').classList.remove('active');
    imageActive++;
    document.querySelectorAll('.item')(imageActive).classList.add('active')
});


// document.querySelector(".prev").addEventListener('click',function(){
//     console.log('prev');
//     document.querySelector('.active').classList.remove('active');
//     imageActive--;
//     document.querySelectorAll('.item')(imageActive).classList.add('active')
// })

