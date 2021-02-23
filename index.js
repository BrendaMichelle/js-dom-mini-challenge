/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'blue'; 

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const editTraveler = document.querySelector('div.traveler');

editTraveler.innerHTML = `<div class="traveler">
    <div id=${traveler.id}>
    <img src=${traveler.photo}
        alt=${traveler.name}>
    <h2>${traveler.name}</h2>
    <em>${traveler.nickname}</em>
    </div>
    <h4>Great Sightings</h4>
    <ul id="animals">
    <!-- add an <li> for each animal sighting here -->
    </ul>
    </div>`


/***** Deliverable 4 *****/

traveler.animalSightings.forEach( function( sightingObj ) {

    const li =  document.createElement('li')
    li.classList.add('sighting')
    li.dataset.id = sightingObj.id

    li.innerHTML = `<p>${sightingObj.description}</p>
        <img src="${sightingObj.photo}" alt="${sightingObj.species}"/>
        <a href="${sightingObj.link}" target="_blank">Here's a video about the ${sightingObj.species} species!</a>`

    const liLocation = document.querySelector('ul#animals')
    liLocation.append(li)

})

/***** Deliverable 5 *****/

const sightingDelete = document.querySelector('[data-id="3"]')
sightingDelete.remove()