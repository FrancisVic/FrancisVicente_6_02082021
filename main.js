async function fetchMovies() {
    let response = await fetch('FishEyeData.json')
    console.log(response)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
    fetchMovies();
            .then(function (value) {
        let photographer = document.getElementsByClassName('photographer')
        addEventListener('click', photographer)
        document.createElement('div')
    })
        .catch(function (err) {
            // Une erreur est survenue
        });
}

