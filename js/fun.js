window.onclick = e => {
    const clicked = e.target;
    clicked.classList.add("active");
}

// const url = "https://dummyjson.com/quotes"
// https://api.github.com/repos/:owner/:repo/contents/:path

const url = "https://api.github.com/repos/Jeehay28/get-quote-of-the-day/contents/src/msg.json";
const personalAccessToken = "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"

const headers = new Headers({
    'Authorization': `token ${personalAccessToken}`,
  });
  
  const requestOptions = {
    method: 'GET',
    headers,
  };

const before = document.querySelector("#before");


// fetch(url, requestOptions)
//     .then(response => response.json())
//     .then(obj => {
//         console.log(typeof obj) // object
//         console.log(obj);
//         console.log(Object.keys(obj))
//         console.log(obj.quotes)
//         before.innerHTML =
//             `<h2>${obj.quotes[num].quote}</h2>
//              <h2 style="color : grey">${obj.quotes[num].author}</h2>`
//     })

fetch(url, requestOptions)
.then(response => response.json())
.then(data => {
    // Decode the Base64 content
    const content = atob(data.content);
    const obj = JSON.parse(content);
    
    console.log(obj.quotes.length);
    const num = Math.floor(Math.random() * obj.quotes.length);
    console.log(num);

    if (obj.quotes && obj.quotes[num]) {
        // Check if obj.quotes[num] exists before accessing its properties
        before.innerHTML =
            `<h2>${obj.quotes[num].quote}</h2>
             <h2 style="color : grey">${obj.quotes[num].author}</h2>`;
    } else {
        console.error('Invalid index or data structure.');
    }
})
.catch(error => console.error('Error:', error));