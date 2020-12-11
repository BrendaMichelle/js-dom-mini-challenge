/***** Deliverable 1 *****/
let header = document.querySelector("h1#header")
console.log("Here's your header:", header.textContent)


/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let travelerSpecs = document.querySelector("#profile")
h2ToUpdate = travelerSpecs.querySelector("h2")
h2ToUpdate.textContent = traveler.name

emToUpdate = travelerSpecs.querySelector("em")
emToUpdate.textContent = traveler.nickname

imgToUpdate = travelerSpecs.querySelector("img")
imgToUpdate.src = traveler.photo
imgToUpdate.alt = traveler.name


/***** Deliverable 4 *****/

traveler.animalSightings.forEach( function(animalSighting) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let a = document.createElement('a')
    //
    li.id = animalSighting.id 
    img.src = animalSighting.photo
    img.alt = animalSighting.species 
    a.href = animalSighting.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalSighting.species} species!`
    // 
    let animals = document.querySelector("#animals")
    li.append(p)
    li.append(img)
    li.append(a)
    animals.append(li)
})

/***** Deliverable 5 *****/

let nonRaffySighting = document.querySelector(`li[id='3']`)
nonRaffySighting.remove()
