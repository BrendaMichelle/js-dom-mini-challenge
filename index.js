/***** Deliverable 1 *****/
const header = document.querySelector('#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "aqua"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profileDiv = document.querySelector('#profile')
profileDiv.innerHTML = `
  <img src=${traveler.photo} alt=${traveler.name}>
  <h2>${traveler.name}</h2>
  <p>AKA: <em>${traveler.nickname}</em></p>
`;

/***** Deliverable 4 *****/
const animalsList = document.querySelector("#animals")

traveler.animalSightings.forEach(sighting => {
  const animalLineItem = document.createElement("li")
  animalLineItem.innerHTML = `
  <li data-id="${sighting.id}">
    <p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>
  </li>
  `;
  
  animalsList.appendChild(animalLineItem)
})


/***** Deliverable 5 *****/

const badEntry = document.querySelector("[data-id='3']")
badEntry.remove();
