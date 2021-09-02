async function fetchPhotographer() {
    let response = await fetch('FishEyeData.json');
    console.log(response);
}

document.addEventListener('DOMContentLoaded', async () => {
    let photographer = [];

    try {
        photographer = await fetchPhotographer();
    }
    catch (e) {
        console.log('Erreur!');
        console.log('e');
    }
    console.log(photographer);
});

