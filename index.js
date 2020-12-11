/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/

header.style.color = 'darkblue'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let pImg = document.querySelector("#profile img")
let pName = document.querySelector("#profile h2")
let pNickname = document.querySelector("#profile em")

pImg.src = traveler.photo
pImg.alt = "Raffy Pic"
pName.innerHTML = traveler.name
pNickname.innerHTML = traveler.nickname


/***** Deliverable 4 *****/

traveler.animalSightings.forEach( function (sight) {

    let li = document.createElement("li")
    let p = document.createElement("p")
    let img = document.createElement("img")
    let a  = document.createElement("a")

    li.setAttribute("data-id", sight.id)
    p.textContent = sight.description
    img.src = sight.photo
    img.alt = sight.species
    a.href = sight.link
    a.textContent = `Here's a video about the ${sight.species} species!`

    let listings = document.querySelector("#animals")

    li.append(p, img, a)
    listings.append(li)
} )

/***** Deliverable 5 *****/
