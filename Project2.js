const colors = ["bisque", "darkseagreen","lightblue", "lightcyan", "cornflowerblue","coral", "cadetblue","darkkhaki","aqua"];


const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

function randomnumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", () =>
{
    const num = randomnumber();
    document.body.style.backgroundColor = colors[num];
})
/* height: 500px;
    width: 100%;
    background-size: cover;
    background-position: center;*/