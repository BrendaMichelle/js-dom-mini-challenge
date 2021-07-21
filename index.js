/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = '#088F8F'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.querySelector('div#profile')
const travelerImg = profile.querySelector('img')

travelerImg.src = traveler.photo
travelerImg.alt = traveler.name

profile.querySelector('h2').innerHTML = traveler.name
profile.querySelector('em').innerHTML = traveler.nickname



/***** Deliverable 4 *****/
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


/***** Deliverable 5 *****/
const wrongTraveler = document.querySelector("[data-id='3']")
wrongTraveler.remove()
