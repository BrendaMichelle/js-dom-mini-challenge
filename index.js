/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
let headerElement = document.querySelector('#header')
headerElement.style.color = 'blue'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

// update image
let imgElement = document.querySelector('img')
imgElement.src = traveler.photo
imgElement.alt = 'raffy picture'

// update name
let nameElement = document.querySelector('h2')
nameElement.textContent = traveler.name

// update nickname
let nicknameElement = document.querySelector('em')
nicknameElement.textContent = traveler.nickname

/***** Deliverable 4 *****/
let parent = document.querySelector('ul')

traveler.animalSightings.forEach(function(animalSighting) {

    // create parent li
    let li = document.createElement('li')
    li.setAttribute('data-id', animalSighting.id)
    parent.append(li)

    // create p tag
    let p = document.createElement('p')
    p.textContent = animalSighting.description
    li.append(p)

    // create img 
    let img = document.createElement('img')
    img.src = animalSighting.photo
    img.alt = animalSighting.species
    li.append(img)

    // create a 
    let a = document.createElement('a')
    a.href = animalSighting.link
    a.textContent = `Here's a video about the ${animalSighting.species} species!`
    li.append(a)

})


/***** Deliverable 5 *****/
document.querySelector("[data-id='3']").remove()