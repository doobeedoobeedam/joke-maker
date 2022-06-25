const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

const generateJoke = async () => {
    const config = {
        headers: { Accept: "application/json" },
    }

    const rest = await fetch('https://icanhazdadjoke.com', config);
    const data = await rest.json();
    joke.innerHTML = data.joke;
}

generateJoke();

btn.addEventListener('click', function() {
    generateJoke()
})