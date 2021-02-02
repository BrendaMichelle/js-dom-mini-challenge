/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

title = document.querySelector('#header').style.color = "#070947"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let profile = document.querySelector(".traveler")
profile.innerHTML = `<div id="profile">
<img src="${traveler.photo}"
  alt="${traveler.name}">
<h2>${traveler.name}</h2>
<em>${traveler.nickname}</em>
</div>
<h4>Great Sightings</h4>
<ul id="animals">
<!-- add an <li> for each animal sighting here -->
</ul>`

console.log(profile)
/***** Deliverable 4 *****/


const listOfSightings = document.querySelector("ul#animals")

traveler.animalSightings.forEach(render)


function render (sighting) {
    let thisSighting = document.createElement("li")
    thisSighting.dataset.id = sighting.id
    thisSighting.innerHTML = `<p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>
  `
  listOfSightings.append(thisSighting)
} 





/***** Deliverable 5 *****/

sightingToRemove = listOfSightings.querySelector("li[data-id='3']")

sightingToRemove.remove()