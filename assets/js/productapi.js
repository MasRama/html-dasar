(async function () {
    let resp = await fetch("https://651019443ce5d181df5cea6e.mockapi.io/product")
    let data = await resp.json();
    console.log(data)
    let str = ``
    for await (let items of data) {
        str += `<div class="column">
        <div class="card">
          <img src="${items.image}" width="55%" alt="lego">
          <h3>${items.title}</h3>
          <p>${items.description}</p>
          <a href="#">Lihat Produk</a>
        </div>
        </div>`
    }
    console.log(str)
    document.getElementById("rowuse").innerHTML = str
})()


