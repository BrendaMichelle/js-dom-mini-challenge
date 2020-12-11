        /***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "gold"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const img = document.querySelector("img")
img.src = traveler.photo
img.alt = traveler.name

const h2 = document.querySelector("h2")
h2.textContent = traveler.name

const em = document.querySelector("em")
em.textContent = traveler.nickname

/***** Deliverable 4 *****/


const ul = document.querySelector("#animals")
traveler.animalSightings.forEach( function (sighting) {
    
let li = document.createElement("li")
li.id = sighting.id

let p = document.createElement("p")
p.textContent = sighting.description

let img = document.createElement("img")
img.src = sighting.photo
img.alt = sighting.species

let a  = document.createElement("a")
a.href = sighting.link
a.textContent = `Here's a video about the ${sighting.species} species!`
    
    
    
       
let animalList = document.querySelector("#animals")
li.append(p, img, a)
animalList.append(li)
})

/***** Deliverable 5 *****/
let wrongPic = document.getElementById('3')

wrongPic.remove()