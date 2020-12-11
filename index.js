/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "teal"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const img = document.querySelector(".traveler img")
const h2 = document.querySelector(".traveler h2")
const em = document.querySelector(".traveler em")

img.src = traveler.photo
img.alt = traveler.name
h2.textContent = traveler.name
em.textContent = traveler.nickname



/***** Deliverable 4 *****/



const li = document.createElement("li")
const img = document.createElement("img")
const p = document.createElement("p")
const a = document.createElement("a")

li.dataset.id = traveler.id
p.textContent = traveler.description
img.src = traveler.photo
img.alt = traveler.species
a.href = traveler.link

li.append(p, anchor)
/// i got stuck at this point 




/***** Deliverable 5 *****/
