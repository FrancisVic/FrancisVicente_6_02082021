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

    let header = document.createElement('header');
    let banner = document.createElement('div');
    banner.classList.add('banner');
    header.appendChild(banner);
    console.log(header);

    let nav = document.createElement('nav');
    header.appendChild(nav);
    nav.innerHTML = "<span>efer</span>";
    nav.setAttribute('id','nav');
    console.log(nav);
    let container = document.createElement('div');
    container.setAttribute('id', 'container');

    let containerPhotographer = document.createElement('div');
    container.appendChild(containerPhotographer);
    containerPhotographer.classList.add('container__photographer');

    let photographer = document.createElement('div');
    containerPhotographer.appendChild(photographer);
    photographer.classList.add('photographer');

    let containerPicture = document.createElement('div');
    photographer.appendChild(containerPicture);
    containerPicture.classList.add('container__photographer__picture');

    let photographerPicture = document.createElement('div');
    containerPicture.appendChild(photographerPicture);
    photographerPicture.classList.add('photographer__picture');
   
    let imageSrc = document.createElement('img')
    photographerPicture.appendChild(imageSrc);
    imageSrc.setAttribute('src', 'image/EllieRoseWilkens.jpg');

    
    
    
    console.log(container);
    console.log(photographer);





    // console.log(value);
}