let data = {
    "photographers": [
        {
            "name": "Mimi Keel",
            "id": 243,
            "city": "London",
            "country": "UK",
            "tags": [
                "portrait",
                "events",
                "travel",
                "animals"
            ],
            "tagline": "Voir le beau dans le quotidien",
            "price": 400,
            "portrait": "MimiKeel.jpg"
        },

        {
            "name": "Ellie-Rose Wilkens",
            "id": 930,
            "city": "Paris",
            "country": "France",
            "tags": [
                "sports",
                "architecture"
            ],
            "tagline": "Capturer des compositions complexes",
            "price": 250,
            "portrait": "EllieRoseWilkens.jpg"
        },
        {
            "name": "Tracy Galindo",
            "id": 82,
            "city": "Montreal",
            "country": "Canada",
            "tags": [
                "art",
                "fashion",
                "events"
            ],
            "tagline": "Photographe freelance",
            "price": 500,
            "portrait": "TracyGalindo.jpg"
        },
        {
            "name": "Nabeel Bradford",
            "id": 527,
            "city": "Mexico City",
            "country": "Mexico",
            "tags": [
                "travel",
                "portrait"
            ],
            "tagline": "Toujours aller de l'avant",
            "price": 350,
            "portrait": "NabeelBradford.jpg"
        },
        {
            "name": "Rhode Dubois",
            "id": 925,
            "city": "Barcelona",
            "country": "Spain",
            "tags": [
                "sport",
                "fashion",
                "events",
                "animals"
            ],
            "tagline": "Je crée des souvenirs",
            "price": 275,
            "portrait": "RhodeDubois.jpg"
        },
        {
            "name": "Marcel Nikolic",
            "id": 195,
            "city": "Berlin",
            "country": "Germany",
            "tags": [
                "travel",
                "architecture"
            ],
            "tagline": "Toujours à la recherche de LA photo",
            "price": 300,
            "portrait": "MarcelNikolic.jpg"
        }
    ]
};

function generatePhotographer(data) {
    let str = "";
    data.tags.forEach(element => {
        str += `<li>#${element}</li>`
    });
    let result = `<div class="photographe-presentation">
    <div class="picturePhotographe"><a href="photographer.html"><img src="image/${data.portrait}" alt="présentation de Mimi Keel" role="presentation"
        aria-label="présentation photographe"/> </a>
        </div>
    <h2>${data.name}</h2>
    <span>${data.city}</span>
    <span>${data.tagline}</span>
    <span>${data.price}€/jour</span>
    <ul>
        ${str}
    </ul>
</div>`;
    return result;
}

function handlePhotographer(payLoad) {
    let str3 = '</div>'
    let str2 = '<div class="photographe">';
    let str = "";
    for (const element of payLoad) {
        let result = generatePhotographer(element);
        str += result;
    }
    return (str2 + str + str3);

}

function spliceArray(data, size) {
    let newArray = new Array(Math.ceil(data.length / size)).fill("")
        .map(function () { return this.splice(0, size) }, data.slice());
    return newArray;
}

function main(photographe) {
    let split = spliceArray(photographe, 3);
    let str = "";
    for (const element of split) {
        str += handlePhotographer(element);
    }
    let photographer = document.getElementById('presentation').parentNode
    photographer.innerHTML = str;
}
main(data.photographers);

function filterPhotographer() {
    let containeur = document.getElementById('nav');
    let getSpan = containeur.querySelectorAll('span');
    for (const elem of getSpan) {
        elem.addEventListener('click', function (e) {
            // console.log(elem.innerText);
            let tagToCheck = elem.innerText.toLowerCase();
            let photographer = document.getElementsByClassName('photographe-presentation');
            for (let i of photographer) {
                let tmp = i.querySelectorAll('li');
                let tags = Array.prototype.map.call(tmp, function (t) { return t.textContent; });
                if (!tags.includes(tagToCheck) == true && !tags.includes(tagToCheck + "s") == true) {
                    i.style.display = 'none';
                }
                else
                    i.style.display = '';
            }
        })
    }
}
filterPhotographer();

function photographePage() {
    let photographer = document.getElementsByClassName('photographe-presentation');
    for (let elem of photographer) {
        let img = elem.getElementsByTagName('img');
        img[0].addEventListener('click', function (e) {
            let container = document.getElementById('mainDiv').parentNode;
            console.log(container);
            container.innerHTML = "";
        })
    }
}
window.onload = function () {
    photographePage();
}

function reloadPage() {
    document.location.reload();
}

