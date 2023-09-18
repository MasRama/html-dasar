let product = [
    {
        "title": "LegoBiru",
        "description": "Komponenlegobiru",
        "image": "../assets/images/lego.jpg"
    },
    {
        "title": "ActionFigureLego",
        "description": "Actionfigureuntukpelengkapmainanlego",
        "image": "../assets/images/lego2.jpg"
    },
    {
        "title": "KomponenLego",
        "description": "Kumpulankomponenlego",
        "image": "../assets/images/lego3.jpg"
    },
    {
        "title": "LegoStarwars",
        "description": "Legodengantemastarwars",
        "image": "../assets/images/lego4.jpg"
    },
    {
        "title": "LegoPink",
        "description": "Komponenlegopink",
        "image": "../assets/images/lego5.jpg"
    },
    {
        "title": "LegoKuning",
        "description": "Komponenlegokuning",
        "image": "../assets/images/lego6.jpg"
    },
    {
        "title": "LegoOrange",
        "description": "Komponenlegoorange",
        "image": "../assets/images/lego7.jpg"
    },
    {
        "title": "LegoHijau",
        "description": "Komponenlegohijau",
        "image": "../assets/images/lego8.jpg"
    }
]

let str = ``

async function aa() {
    for await (let items of product) {
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
}

aa()

