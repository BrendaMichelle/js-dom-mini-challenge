/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "blue"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const person = document.querySelector("#profile")
const pic = person.querySelector("img")
const h2Name = person.querySelector("h2")
const h2Nick = person.querySelector("em")

pic.src = traveler.photo
pic.alt = traveler.name

h2Name.innerText = traveler.name
h2Nick.innerText = traveler.nickname

/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function(animal){
    // console.log(animal)
    const div = document.createElement("div")
    div.innerHTML = `<li data-id="${animal.id}">
                        <p>${animal.description}</p>
                        <img src="${animal.photo}" alt="${animal.species}"/>
                        <a href="${animal.link}" target="_blank">Here's a video about the ${animal.species} species!</a>
                    </li>`
    const collectionUl = document.querySelector('ul')
    collectionUl.append(div)
})


/***** Deliverable 5 *****/

const trash = document.querySelector("[data-id='3']")
trash.remove()
