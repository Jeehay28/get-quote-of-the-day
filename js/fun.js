window.onclick = e => {
    const clicked = e.target;
    clicked.classList.add("active");
}

// https://api.github.com/repos/:owner/:repo/contents/:path

const url = "https://api.github.com/repos/Jeehay28/get-quote-of-the-day/contents/src/msg.json";
const personalAccessToken = process.env.PERSONALACCESSTOKEN;

const headers = new Headers({
    'Authorization': `token ${personalAccessToken}`,
  });

const requestOptions = {
    method: 'GET',
    headers,
 };

const before = document.querySelector("#before");

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