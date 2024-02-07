// Tạo số ngẫu nhiên từ 11 đến 30


 // In ra số ngẫu nhiên từ 11 đến 30
// Tạo 100 số ngẫu nhiên từ 11 đến 30 và hiển thị chúng
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 20) + 11;
    let crballElements = document.getElementsByClassName('crball');
    for (let j = 0; j < crballElements.length; j++) {
        crballElements[j].innerHTML += `<span style="--i:${randomNumber};"></span>`;
        console.log(crballElements[j].innerHTML)
    }

}

  