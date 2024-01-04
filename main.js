const button = document.querySelector("button");
const quote = document.querySelector("h1");
const author = document.querySelector("h2");
const tag = document.querySelector(".badge");

const getData = async () => {
    try {
        const response = await fetch("http://quotable.io/random");
        const data = await response.json();
        quote.innerText = data.content;
        author.innerText = data.author;
        tag.innerText = data.tags;
    } catch (error) {
        console.log(error);
    }
};

button.addEventListener("click", getData);
setInterval(() => {
    getData();
}, 5000);
