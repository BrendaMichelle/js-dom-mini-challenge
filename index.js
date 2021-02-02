/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log(header)
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerDiv = document.querySelector(".traveler")

const travelerImg = travelerDiv.querySelector("img")
travelerImg.src = traveler.photo
travelerImg.alt = traveler.name

const travelerName = travelerDiv.querySelector("h2")
travelerName.textContent = traveler.name

const travelerNickame = travelerDiv.querySelector("em")
travelerNickame.textContent = traveler.nickname
/***** Deliverable 4 *****/
const animals = travelerDiv.querySelector("#animals")

traveler.animalSightings.forEach(function(animal) {
    const animalLi = document.createElement("li")
    animalLi.dataset.id = animal.id

    const animalP = document.createElement("p")
    animalP.innerText = animal.description

    const animalImg = document.createElement("img")
    animalImg.src = animal.photo
    animalImg.alt = animal.species

    const animalA = document.createElement("a")
    animalA.href = animal.link
    animalA.target = "_blank"
    animalA.innerText = `Here's a video about the ${animal.species} species!`

    animalLi.append(animalP, animalImg, animalA)
    animals.append(animalLi)
})

/***** Deliverable 5 *****/
const centipede = animals.querySelector(`[data-id='3']`)
centipede.remove()