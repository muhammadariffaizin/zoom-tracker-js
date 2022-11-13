let peserta = document.querySelectorAll(".participants-item__display-name");
let nama_peserta = [];
let list = "";

Array.from(peserta).forEach(item => {
    nama_peserta.push(item.innerText);
    list += item.innerText + " \n";
});

console.log(list);