fetch("data.json")
    .then(res => console.log(res.json()))
    .then(data=> console.log(data))