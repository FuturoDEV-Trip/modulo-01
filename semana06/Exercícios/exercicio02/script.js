fetch("https://rickandmortyapi.com/api/character/5", { method: "GET" })
.then((responseFetch)=>{
    return responseFetch.json();
})
.then((responseApi)=>{
    document.write(`<img src='${responseApi.image}' />`);
    document.write(`<h1>${responseApi.name}</h1>`);
    document.write(`<p>${responseApi.species}</p>`);
    document.write(`<p>${responseApi.origin.name}</p>`);
})
.catch((err)=>{
    console.error("Error: ", err);
})