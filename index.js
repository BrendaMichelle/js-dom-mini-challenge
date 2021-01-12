/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "#1DB954"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profilePic = document.querySelector("div#profile img")
profilePic.src= `${traveler.photo}`
profilePic.alt = `${traveler.name}`

const profileName = document.querySelector("div#profile h2")
profileName.textContent = `${traveler.name}`

const profileNickname = document.querySelector("div#profile em")
profileNickname.textContent = `${traveler.nickname}`



/***** Deliverable 4 *****/



traveler.animalSightings.forEach(function (sighting) {
    const newUL = document.createElement('ul')
    const newLI = document.createElement('li')
    const newP = document.createElement('p')
    const newImg = document.createElement('img')
    const newAnchor = document.createElement('a')

    newLI.dataset.id = sighting.id
  
    newP.textContent = sighting.description

    newImg.src = sighting.photo
    newImg.alt = sighting.species

    newAnchor.textContent = `Here's a video about the ${sighting.species} species!`
    newAnchor.href = sighting.link
    newAnchor.target = "_blank"

    newLI.append(newP, newImg, newAnchor)

    const animals = document.querySelector("#animals")
    animals.append(newLI)
})




/***** Deliverable 5 *****/


sightingToRemove = document.querySelector("li[data-id='3']")
sightingToRemove.remove()

