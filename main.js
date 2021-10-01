function fetchPhotograph() {
    fetch("FishEyeData.json")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            generatePhotographer(value);


        })
        .catch(function (err) {
            // Une erreur est survenue
        });
}
fetchPhotograph();

function generatePhotographer(value) {

    

    
    console.log(value);
    let photographer = document.createElement('div');
    photographer.classList.add('photographer');

    let containerPicture = document.createElement('div');
    containerPicture.classList.add('container__photographer__picture');
    photographer.appendChild(containerPicture);

    let photographerPicture = document.createElement('div');
    photographerPicture.classList.add('photographer__picture');
    containerPicture.appendChild(photographerPicture);

    let imageSrc = document.createElement('img');
    let a = document.createElement('a');
    a.setAttribute('href', 'photographer.html');
    imageSrc.setAttribute('src', 'image/EllieRoseWilkens.jpg');

    photographerPicture.appendChild(a);
    a.appendChild(imageSrc);

    let getContainerPhotographer = document.getElementById('container__photographer');

    let describe = document.createElement('div');
    photographer.appendChild(describe);
    describe.classList.add('photographer__describe');
    describe.style.fontFamily = 'DM Sans';
    let namePhotographer = document.createElement('h2');
    namePhotographer.textContent = "Ellie Rose Wilkens";
    namePhotographer.style.fontWeight = '400';
    namePhotographer.style.fontSize = '36px';
    let city = document.createElement('span');
    city.textContent = "Paris, France";
    city.style.color = '#901C1C';

    let priceDescribe = document.createElement('span');
    priceDescribe.textContent = "Travaille sur des compositions complexes";

    let price = document.createElement('span');
    price.textContent = "250€/jour";
    price.style.color = '#757575';

    let hashtag = document.createElement('span');
    hashtag.classList.add('border-tags');
    hashtag.textContent = "#sport";
    hashtag.style.fontWeight = '500';

    describe.appendChild(namePhotographer);
    describe.appendChild(city);
    describe.appendChild(price);
    describe.appendChild(hashtag);
    getContainerPhotographer.appendChild(photographer);
}