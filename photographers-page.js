let str = window.location.href;
let url = new URL(str);
console.log(url);
let search_params = new URLSearchParams(url.search);
if (search_params.has('name')) {
    let name = search_params.get('name');
    // console.log(name)
}
