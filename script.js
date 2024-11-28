const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const list = document.querySelectorAll("li");
const paragraph = document.querySelectorAll("p");
const header = document.getElementById("h1");

header.style.backgroundColor = "Pink";
container1.style.backgroundColor = "Pink";
container2.style.backgroundColor = "Pink";

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.backgroundColor = 'Red';
    paragraph[i].style.fontWeight = 'bold';
    paragraph[i].style.fontFamily = 'Consolas';
}

for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = 'Red';
    list[i].style.fontWeight = 'bold';
    list[i].style.fontFamily = 'Consolas';
}
