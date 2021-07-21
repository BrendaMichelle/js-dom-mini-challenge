/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = '#088F8F'


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)
traveler.animalSightings.forEach(
    function(sighting) {
        const unorderedList = document.querySelector('ul#animals')
        const animalSighting = 
            `<li data-id="${sighting.id}">
                <p>${sighting.description}</p>
                <img src="${sighting.photo}" alt="${sighting.species}"/>
                <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>
            </li>`
        unorderedList.innerHTML += animalSighting
    }
)

/***** Deliverable 4 *****/



/***** Deliverable 5 *****/
