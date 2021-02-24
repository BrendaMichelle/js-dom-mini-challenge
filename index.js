/***** Deliverable 1 *****/
const header = document.querySelector("h1#header");
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue";


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
document.querySelector("div.traveler > div#profile > h2").textContent = traveler.name;
document.querySelector("div.traveler > div#profile > em").textContent = traveler.nickname;
document.querySelector("div.traveler > div#profile > img").src = traveler.photo;
document.querySelector("div.traveler > div#profile > img").alt = "pic of raffy";
/***** Deliverable 4 *****/
traveler.animalSightings.forEach(function(obj){
    const li = document.createElement("li");
    li.dataset.id = obj.id;
    li.innerHTML =   `<p>"${obj.description}"</p>
        <img src="${obj.photo}" alt="${obj.species}"/>
        <a href="${obj.link}" target="_blank">Here's a video about the ${obj.species} species!</a>`

    document.querySelector("ul#animals").append(li);
})


/***** Deliverable 5 *****/
document.querySelector('[data-id = "3"]').remove();