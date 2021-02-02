/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "purple"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let profile = document.querySelector('#profile')
console.log(profile)
let name = profile.querySelector('h2')
let nickname = profile.querySelector('em')
let image = profile.querySelector('img')
console.log(name, nickname, image)
name.innerText = traveler.name
nickname.innerText = traveler.nickname
image.src = traveler.photo
image.alt = traveler.name


/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (sighting){
    let list = document.createElement('li')
    list.dataset.id = sighting.id
    list.innerHTML = `<p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>`

    console.log(list)

    let animals = document.querySelector('#animals')
    animals.append(list)
})



/***** Deliverable 5 *****/

let wrongSighting = document.querySelector("[data-id='3']")
console.log(wrongSighting)

wrongSighting.remove()
