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

function generatePhotographer(value) { //créer les élements html
    console.log(value);
    let str = window.location.href;
    let url = new URL(str);
    console.log(url);
    let search_params = new URLSearchParams(url.search);
    if (search_params.has('name')) {
        let name = search_params.get('name');
        // console.log(name)
    }


    let photographer = document.createElement('div');
    photographer.classList.add('photographer');

    let containerPicture = document.createElement('div');
    photographer.appendChild(containerPicture);
    containerPicture.classList.add('container__photographer__picture');

    let photographerPicture = document.createElement('div');
    containerPicture.appendChild(photographerPicture);
    photographerPicture.classList.add('photographer__picture');

    let imageSrc = document.createElement('img');
    let a = document.createElement('a');
    a.setAttribute('href', 'photographer.html');
    photographerPicture.appendChild(a);
    a.appendChild(imageSrc);
    imageSrc.setAttribute('src', 'image/EllieRoseWilkens.jpg');

    let getContainerPhotographer = document.getElementById('container__photographer');
    getContainerPhotographer.appendChild(photographer);

    let describe = document.createElement('div');
    photographer.appendChild(describe);
    describe.classList.add('photographer__describe');
    let namePhotographer = document.createElement('h2');
    let city = document.createElement('span');
    let price = document.createElement('span');
    describe.appendChild(namePhotographer);
    describe.appendChild(city);
    describe.appendChild(price);
    let hashtag = document.createElement('span');
    describe.appendChild(hashtag);
    namePhotographer.textContent = "Ellie Rose Wilkens";
    city.textContent = "Paris, France";
    price.textContent = "Travaille sur des compositions complexes 250€/jour";
    hashtag.textContent = "#Sport";
}
