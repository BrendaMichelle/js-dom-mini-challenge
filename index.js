/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "yellow"
header.style.backgroundColor = "black"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const name = document.querySelector("#profile h2")
name.textContent = `${traveler.name}`

const nickname = document.querySelector("#profile em")
nickname.textContent = `${traveler.nickname}`

const img = document.querySelector("#profile img")
img.src = `${traveler.photo}`
img.alt = `${traveler.name}`


/***** Deliverable 4 *****/
const animals = document.querySelector("ul")
traveler.animalSightings.forEach(function (animalSighting){
    const list = document.createElement("li")
        list.dataset.id = animalSighting.id
    const p = document.createElement("p")
        p.textContent = animalSighting.description
    const img = document.createElement("img")
        img.src = animalSighting.photo
        img.alt = animalSighting.species
    const link = document.createElement("a")
        link.href = animalSighting.link
        link.target = "_blank"
        link.textContent = `Here's a video about the ${animalSighting.species} species!`

    list.append(p, img, link)
    animals.append(list)
})

/***** Deliverable 5 *****/
document.querySelector(`[data-id='3']`).remove()