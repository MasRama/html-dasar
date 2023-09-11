//Variabel & Tipe Data
var user = "Fatqan Ramadhiansyah"
let age = "21"
const alamat = "Jl. Raya Bakalan - Kab Malang"
console.log(`Nama : ${user}\nUmur : ${age}\nAlamat : ${alamat}`)

//Operator
let a = 10
let b = 5
console.log(`a = ${a}\nb = ${b}`)
console.log(`a + b = ${a + b}`)
console.log(`a - b = ${a - b}`)
console.log(`a * b = ${a * b}`)
console.log(`a / b = ${a / b}`)
console.log(`a % b = ${a % b}`)
console.log(`a > b = ${a > b}`)

//Pop Up & Kondisi
alert("Selamat Datang di halaman - Javascript Dasar")
let nama = prompt("Masukkan Nama Anda : ")
if(nama) {
    alert(`Halo ${nama}, Ini adalah PopUp box dalam Javascript. Terima Kasih!`)
} else {
    alert("Yah anda tidak mau memasukkan nama :(, Ok tidak masalah. Terima Kasih!")
}

//Perulangan (Loop)
for (let index = 0; index < 5; index++) {
    console.log(`Perulangan ke-${index}`)
}

