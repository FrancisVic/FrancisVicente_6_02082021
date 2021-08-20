fetch("FishEyeData.json")
    .then(function (response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj);
    }).catch(function (err) {
        console.error('ERROR');
    })