let str = window.location.href;
let url = new URL(str);
console.log(url);
let search_params = new URLSearchParams(url.search);
if (search_params.has('id')) {
    let photographer__id = search_params.get('id');
    console.log(photographer__id);
}
