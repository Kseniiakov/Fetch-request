"use strict";
const main = document.querySelector('main');

function dogImage(dog) {
    const img = document.createElement('img');
    main.append(img);
    img.src = dog.message;
    img.classList.add('dog');
}

fetch('https://dog.ceo/api/breeds/image/random')
.then((responce) => responce.json())
.then(function(data) {
    dogImage(data)
})
