/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
header.style.color = "lightgreen";


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler);
document.querySelector("div#profile img").src = traveler.photo;
document.querySelector("div#profile img").alt = traveler.name;
document.querySelector("div#profile h2").innerText = traveler.name;
document.querySelector("div#profile em").innerText = traveler.nickname;


/***** Deliverable 4 *****/
function createAnimalLi(animal){ 
    let ul = document.querySelector("#animals");

    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let a = document.createElement("a");

    li.setAttribute('data-id', animal.id);
    p.innerText = animal.description;
    img.src = animal.photo;
    img.alt = animal.species;
    a.href = animal.link;
    a.innerText = `Here's a video about the ${animal.species} species!`;

    li.appendChild(p);
    li.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
};

traveler.animalSightings.forEach(createAnimalLi);


/***** Deliverable 5 *****/
document.querySelector("li[data-id='3']").remove();