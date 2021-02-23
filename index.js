/***** Deliverable 1 *****/

const header = document.querySelector("#header");

console.log("Here's your header:", header);

/***** Deliverable 2 *****/

header.style.color = 'red';

/***** Deliverable 3 *****/

console.log('This is what the traveler object looks like: ', traveler)
const travName = document.querySelector("h2");
travName.innerText = traveler.name;

const travNickName = document.querySelector("em");
travNickName.innerText = traveler.nickname;

const travImg = document.querySelector("img");
travImg.src = traveler.photo;
travImg.alt = traveler.name;

/***** Deliverable 4 *****/

traveler.animalSightings.forEach (function (sightingsObject) {
    const li = document.createElement('li');
    li.dataset.id = sightingsObject.id;

    li.innerHTML = `<p>${sightingsObject.description}</p>
    <img src="${sightingsObject.photo}" alt="${sightingsObject.species}"/>
    <a href="${sightingsObject.link}" target="_blank">Here's a video about the ${sightingsObject.species} species!</a>`

    const animalsList = document.querySelector('ul');
    animalsList.append(li);
})

/***** Deliverable 5 *****/

const wrongTrav = document.querySelector('li[data-id="3"]');
wrongTrav.remove();