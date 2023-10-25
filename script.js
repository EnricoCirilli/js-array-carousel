// Creare array con le immagini
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

// Trovare elemento "items" nella pagina
const itemsElem = document.querySelector(".items");
console.log(itemsElem);

// Scorrere array, per ogni elemento
// Creare Il div con immagine e aggiungiamo ad una stringa
let imagesString = "";
for (let i = 0; i < images.length; i++) {
  imagesString += `
    <div class="item">
        <img src="./img/${images[i]}" alt="">
    </div>`;
}

console.log(imagesString);

// Aggiungere la stringa contenente tutti i div con le immagini all'interno dell'elemtno "items"
itemsElem.innerHTML = itemsElem.innerHTML + imagesString;

// Impostare lo stato iniziale dello slide
let currentIndex = 0; // indica indice di elemento visibile in questo momento
const slideElems = document.querySelectorAll(".item");
slideElems[currentIndex].classList.add("active");

// Gestione di slider al click next
document.querySelector(".next").addEventListener("click", function () {
  // Se indice è minore (slideElem.lenght - 1)
  // togliere la classe active dall'elemento corrente
  // incrementare indice corrente
  // aggiungere classe active al nuovo elemento corrente

  //         3
  slideElems[currentIndex].classList.remove("active");
  //    3 < 3
  if (currentIndex < slideElems.length - 1) {
    currentIndex++;
  } else {
    // 0
    currentIndex = 0;
  }
  //          0
  slideElems[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function() {
    slideElems[currentIndex].classList.remove("active");
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideElems.length - 1;
    }
    slideElems[currentIndex].classList.add("active");
})


 






























/*
// Dichiaro un array images contente la struttura dati delle immagini;
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"]


console.log(images);
//Scrivo un ciclo for per ripetere l?operazione più volte qaunti sono i dati nell'array

const next = document.querySelector(".next")
// const prev = document.querySelector(".prev")

const slideElem = document.querySelector(".items");

for (let i = 0; i < images.length; i++) {
    const curImage = images[i];
    console.log(slideElem);
    //concateno il ciclo for con un template literal
    if (i === 0) {
        slideElem.innerHtml += ` <div class="item active"> <img src"${curImage}"</div>`;
        console.log("element")
    } else {
        slideElem.innerHtml += ` <div class="item"> <img src"${curImage}"</div>`;
        console.log("element")
    }
}
let imageActive = 0;
document.querySelector(".next").addEventListener('click', function () {
    document.querySelector(".active").classList.remove("active");
    imageActive++;
    document.querySelector(".item").classList.add("active");
});


// document.querySelector(".prev").addEventListener('click',function(){
//     console.log('prev');
//     document.querySelector('.active').classList.remove('active');
//     imageActive--;
//     document.querySelectorAll('.item')(imageActive).classList.add('active')
// })
*/


