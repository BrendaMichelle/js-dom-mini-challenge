/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
const travelerName = traveler.name;
const travelerNickname = traveler.nickname;
const travelerPhoto = traveler.photo;

document.querySelector("body div.traveler div#profile h2").innerHTML = travelerName;
console.log('This is what the traveler object looks like: ', travelerName)

document.querySelector("body div.traveler div#profile em").innerHTML = travelerNickname;
console.log('This is what the traveler object looks like: ', travelerNickname)

document.querySelector("body div.traveler div#profile img").src = travelerPhoto;
console.log('This is what the traveler object looks like: ', travelerPhoto)

/***** Deliverable 4 *****/
let array = traveler.animalSightings;

let ul = document.getElementById("animals");

for (i = 0; i < array.length; i++){
    let animal = traveler.animalSightings[i];
    let li = document.createElement("li");
        li.id = i;
        let p = document.createElement("p");
        p.innerHTML = animal.description;
        li.appendChild(p);
        ul.appendChild(li);

    let img = document.createElement("img");
    img.src = animal.photo;
    li.appendChild(img);
    ul.appendChild(li);

    let a = document.createElement("a");
    a.href = animal.link;
    a.innerHTML = `Here's a video about the ${animal.species} species!`
    li.appendChild(a);
    ul.appendChild(li);
    }

/***** Deliverable 5 *****/
document.getElementById("animals").querySelector("li[id = '2']").remove()