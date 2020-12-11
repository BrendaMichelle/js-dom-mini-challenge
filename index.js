/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/

header.style.color = "teal"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let profileImg = document.querySelector("#profile img")
let profileName = document.querySelector("#profile h2")
let profileNickname = document.querySelector("#profile em")

profileImg.src = traveler.photo
profileImg.alt = "Raffy Pic"
profileName.innerHTML = traveler.name
profileNickname.innerHTML = traveler.nickname

/***** Deliverable 4 *****/

traveler.animalSightings.forEach( function (sighting) {
    // Create elements

    let li = document.createElement("li")
    let p = document.createElement("p")
    let img = document.createElement("img")
    let a  = document.createElement("a")

    // Add attributes and properties

    li.setAttribute("data-id", sighting.id)
    p.textContent = sighting.description
    img.src = sighting.photo
    img.alt = sighting.species
    a.href = sighting.link
    a.textContent = `Here's a video about the ${sighting.species} species!`

    //Add to doc

    let listing = document.querySelector("#animals")

    li.append(p, img, a)
    listing.append(li)
})

/***** Deliverable 5 *****/

findSighting = document.querySelector("li[data-id='3']")
findSighting.remove()