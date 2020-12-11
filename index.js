/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header: ", header)


/***** Deliverable 2 *****/

header.style.color = 'pink'


/***** Deliverable 3 *****/

console.log('This is what the traveler object looks like: ', traveler)
let travelerName = document.querySelector("h2")
let travelerNickName = document.querySelector("em")
let travelerImg = document.querySelector("img") 

travelerName.textContent = traveler.name
travelerNickName.textContent = traveler.nickname
travelerImg.src = traveler.photo
travelerImg.alt = traveler.name


/***** Deliverable 4 *****/

traveler.animalSightings.forEach( function(obj) {
    let li = document.createElement("li")
    let p = document.createElement("p")
    let img = document.createElement("img")
    let a = document.createElement("a")

    li.dataset.id = `${obj.id}`
    p.textContent = obj.description
    img.src = obj.photo
    img.alt = obj.species
    a.href = obj.link
    a.textContent = `Here's a video about the ${obj.species} species!`

    let ul = document.querySelector("#animals")

    li.append(p, img, a)
    ul.append(li)
})


/***** Deliverable 5 *****/


let dataToDelete = document.querySelector("[data-id='3']")
dataToDelete.remove()