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

// fetch(url, requestOptions)
// .then(response => response.json())
// .then(data => {
//     // Decode the Base64 content
//     const content = atob(data.content);
//     const obj = JSON.parse(content);
    
//     console.log(obj.quotes.length);
//     const num = Math.floor(Math.random() * obj.quotes.length);
//     console.log(num);

//     if (obj.quotes && obj.quotes[num]) {
//         // Check if obj.quotes[num] exists before accessing its properties
//         before.innerHTML =
//             `<h2>${obj.quotes[num].quote}</h2>
//              <h2 style="color : grey">${obj.quotes[num].author}</h2>`;
//     } else {
//         console.error('Invalid index or data structure.');
//     }
// })
// .catch(error => console.error('Error:', error));


fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.json(); // Parse the response as JSON

  })
  .then(data => {
    try {
      // Decode the Base64 content
      const content = atob(data.content);

      // Now you can work with the decoded content as a string
      console.log(content);

      // Parse the decoded content as JSON
      const obj = JSON.parse(content);

      console.log(obj);

      // Now you can work with the JSON object
      if (obj.quotes && obj.quotes.length > 0) {
        const num = Math.floor(Math.random() * obj.quotes.length);
        console.log(num);

        before.innerHTML =
          `<h2>${obj.quotes[num].quote}</h2>
           <h2 style="color : grey">${obj.quotes[num].author}</h2>`;
      } else {
        console.error('Invalid index or data structure.');
      }
    } catch (error) {
      console.error('Error decoding or parsing JSON:', error);
    }
  })
  .catch(error => console.error('Error:', error));