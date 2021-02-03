/***** Deliverable 1 *****/
const animalsUl = document.querySelector("#animals")

const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector("#profile")
console.log(profile)

const travelerPhoto = profile.querySelector("img")
travelerPhoto.src = traveler.photo
travelerPhoto.alt = "Traveler Photo"

const travelerName = profile.querySelector("h2")
travelerName.textContent = traveler.name

const travelerNickname = profile.querySelector("em")
travelerNickname.textContent = traveler.nickname

/***** Deliverable 4 *****/


traveler.animalSightings.forEach(animal =>  {
    const newSighting = document.createElement("li")
    newSighting.dataset.id = animal.id

    const sightingDescription = document.createElement("p")
    sightingDescription.textContent = animal.description

    const sightingImage = document.createElement("img")
    sightingImage.src = animal.photo

    const sightingLink = document.createElement("a")
    sightingLink.href = animal.link 
    sightingLink.textContent = `Here's a video about the ${animal.species} species!`

    newSighting.append(sightingDescription, sightingImage, sightingLink)
    animalsUl.append(newSighting)
})

/***** Deliverable 5 *****/

const removeSighting = document.querySelector("li[data-id='3']")
removeSighting.remove()