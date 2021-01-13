/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "brown"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
//  *name*, *nickname*, and *photo* 

const profile = document.querySelector('#profile')
console.log('This is the profile: ', profile)
const image = profile.querySelector('img')
console.log('This is the image: ', image)
const name = profile.querySelector('h2')
console.log('This is the name: ', name)
const nickname = profile.querySelector('em')
console.log('This is the nickname: ', nickname)

image.src = traveler.photo
name.textContent = traveler.name
nickname.textContent = traveler.nickname



/***** Deliverable 4 *****/

//artisanal way

traveler.animalSightings.forEach(function (sightingObject){
    const sightingLi = document.createElement('li')
    const sightingP = document.createElement('p')
    const sightingImg = document.createElement('img')
    const sightingA = document.createElement('a')

    // <li data-id="{animalSighting id}">
    // <p>{animal sighting description}</p>
    // <img src="{animal sighting photo}" alt="{animal sighting species}"/>
    // <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
    // </li>
    sightingLi.setAttribute("data-id", sightingObject.id);

    sightingP.textContent = sightingObject.description;

    sightingImg.src = sightingObject.photo

    sightingA.setAttribute('href', sightingObject.link)
    sightingA.setAttribute('target', '_blank')
    sightingA.textContent = `Here's a video about the ${sightingObject.species} species`

    // relationships
    sightingLi.append(sightingP, sightingImg, sightingA)

    //DOM Relationship

    const animals = document.querySelector('#animals')
    animals.append(sightingLi)
})


/***** Deliverable 5 *****/


const liS = animals.querySelector("li[data-id='3']")
liS.remove()