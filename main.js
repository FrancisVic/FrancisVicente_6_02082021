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
    let str = "https://waytolearnx.com/t.html?name=MimiKheel&age=25&address=paris";
    let url = new URL(str);
    let search_params = new URLSearchParams(url.search);
    if (search_params.has('name')) {
        let name = search_params.get('name');
        // console.log(name)
    }
    let header = document.getElementById('header');
    let main = document.getElementById('main');
    let photographer = document.getElementsByClassName('photographer__picture');
    photographer.createElement('a');
    photographer.setAttribute('href');
    console.log(header);
    console.log(main);
    

    


    // console.log(value);
}