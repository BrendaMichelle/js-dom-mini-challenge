/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "cyan"
header.style.backgroundColor = "black"
header.style.border = "chartreuse"


/***** Deliverable 3 *****/


console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector("div#profile")
profile.innerHTML = `<div id="profile"> 

    <img src="${traveler.photo}"
      
    alt="${traveler.name}">
    
    <h2>${traveler.name}</h2>

    <em>${traveler.nickname}</em>

    </div>

    <h4>Great Sightings</h4>

    <ul id="animals">
    <!-- add an <li> for each animal sighting here -->
    </ul>`


/***** Deliverable 4 *****/

// const listOfSightings = document.querySelector("ul#animals")

// traveler.animalSightings.forEach (function (sighting) {
    
//     let animalSighting = document.createElement ("li")
    
//     animalSighting.dataset.id = sighting.id

//     animalSighting.innerHTML = `<p>${sighting.description}</p>

//     <img src="${sighting.photo}" alt="${sighting.species}"/>

//     <a href="${sighting.link}" target="_blank"> Here's a video about the ${sighting.species} species!</a>

//   </li>`

//   listOfSightings.append(animalSighting)
 
// })


const ul = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (animalSighting) {
    console.log(animalSighting)

    const li = document.createElement('li')
    li.dataset.id = animalSighting.id
    console.log(li)

    li.innerHTML = `<p>${animalSighting.description}</p>

    <img src= "${animalSighting.photo}" alt="${animalSighting.species}"/>

    <a href="${animalSighting.link}" target="_blank">Here's a video about the ${animalSighting.species} species!</a>
  </li>`
  
  console.log(li)
  ul.append(li)
})

/***** Deliverable 5 *****/

const liToRemove = document.querySelector('[data-id="3"]')
console.log(liToRemove)

liToRemove.remove()