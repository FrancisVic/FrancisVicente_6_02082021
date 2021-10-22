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

    let j = 0;
    while (value.photographers.length > j) {
        {
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
            a.setAttribute('href', 'photographer.html?id=' + value.photographers[j].id);
            imageSrc.setAttribute('src', value.photographers[j].portrait);

            photographerPicture.appendChild(a);
            a.appendChild(imageSrc);

            let getContainerPhotographer = document.getElementById('container__photographer');

            let describe = document.createElement('div');
            photographer.appendChild(describe);
            describe.classList.add('photographer__describe');
            describe.style.fontFamily = 'DM Sans';
            let namePhotographer = document.createElement('h2');
            namePhotographer.textContent = value.photographers[j].name;
            describe.appendChild(namePhotographer);

            let city = document.createElement('span');
            city.classList.add('city');
            city.textContent = value.photographers[j].city;
            describe.appendChild(city);

            let priceDescribe = document.createElement('span');
            priceDescribe.textContent = value.photographers[j].tagline;
            priceDescribe.classList.add('priceDesc');
            describe.appendChild(priceDescribe);

            let price = document.createElement('span');
            price.classList.add('price');
            price.textContent = value.photographers[j].price + "€\/jour";
            describe.appendChild(price);

            getContainerPhotographer.appendChild(photographer);

            console.log(value.photographers[j]);
            j++;
        }

        let i = 0;
        while (value.photographers[j].tags.length > i) {
            let hashtag = document.createElement('span');
            hashtag.classList.add('border-tags');
            hashtag.textContent = value.photographers[j].tags[i];
            console.log(hashtag);
            describe.appendChild(hashtag);
            i++;
        }
    }
}
