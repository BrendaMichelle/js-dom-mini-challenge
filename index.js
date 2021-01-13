/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let post = document.querySelector('.traveler')
let photo = post.querySelector('img')
let newName = post.querySelector('h2')
let newNickName = post.querySelector('em')

photo.src = traveler.photo
newName.textContent = traveler.name
newNickName.textContent = traveler.nickname



/***** Deliverable 4 *****/

const ul = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (animal){
    let newLi = document.createElement('li')
    newLi.dataset.id = animal.id

    let newP = document.createElement('p')
    newP.textContent = animal.description

    let newImg = document.createElement('img')
    newImg.src = animal.photo
    newImg.alt = animal.species
    
    let newLink = document.createElement('a')
    newLink.href = animal.newLink
    newLink.target = "_blank"
    newLink.textContent = `Here's a video about the ${animal.species} species!`

    newLi.append(newP, newImg, newLink)

    ul.append(newLi)


})




/***** Deliverable 5 *****/
