window.onclick = e => {
    // console.log(e.target);
    const clicked = e.target;
    clicked.classList.add("active");
}

const before = document.querySelector("#before");
const num = Math.floor(Math.random() * 6);
console.log(num);
const url = "https://github.com/Jeehay28/get-quote-of-the-day/blob/main/src/msg.json"

fetch(url)
    .then(response => response.json())
    .then(obj => {
        console.log(typeof obj) // object
        console.log(Object.keys(obj))
        console.log(obj.quotes)
        before.innerHTML =
            `<h2>${obj.quotes[num].quote}</h2>
             <h2 style="color : grey">${obj.quotes[num].author}</h2>`
    })