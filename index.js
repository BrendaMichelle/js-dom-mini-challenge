/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "Magenta"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

    let profileDiv = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('h2')
    let nickname = document.createElement('em')

    profileDiv.id = ("profile")
    img.src = traveler.photo
    img.alt = traveler.name
    name.textContent = traveler.name 
    nickname.textContent = traveler.nickname
    
    let profiles = document.querySelector("#profile")
    profileDiv.append(img, name, nickname)
    profiles.append(profileDiv)


/***** Deliverable 4 *****/
let animals = document.querySelector("#animals")
    traveler.animalSightings.forEach(function(animal){
        animals.insertAdjacentHTML('beforeend', `
        
            <li data-id= "${animal.id}">
            <p>{animal.description}</p>
            <img src="${animal.photo}" alt="${animal.species}"/>
            <a href="${animal.link}" target="_blank">Here's a video about the ${animal.species} species!</a>
        </li>  `)
    
    })


/***** Deliverable 5 *****/

let wrongAnimal = animals.querySelector("[data-id='3']")
wrongAnimal.remove()