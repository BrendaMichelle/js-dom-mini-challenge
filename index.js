/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"
header.style.textShadow= "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"



/***** Deliverable 3 *****/
let travelerName = document.querySelector("#travelerName")
let travelerPicture = document.querySelector("#travelerPicture")
let travelerNickname = document.querySelector("#travelerNickname")
console.log('This is what the traveler object looks like: ', traveler)
travelerName.textContent = traveler.name
travelerNickname.textContent = traveler.nickname
travelerPicture.src = traveler.photo
travelerPicture.alt = `A photo of ${traveler.name}`
/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animal) {
    console.log(animal)
    // create outer most element
    const animalLI = document.createElement('li')
    animalLI.className = 'animalLI'
    animalLI.dataset.id = animal.id

    // add innerHTML & updated the parts that need to be dynamic using string interpolation
    animalLI.innerHTML = `
<p>${animal.description}</p>
<img src="${animal.photo}" alt="${animal.species}"/>
<a href="${animal.link}" target="_blank">Here's a video about the ${animal.species} species!</a>
`


    //find where on the page we want to add the new element
    const collection = document.querySelector('#animals')
    // slap it on the DOM
    collection.append(animalLI)

})


/***** Deliverable 5 *****/
let bugremoval = document.querySelector(`li[data-id='3']`)
bugremoval.remove()