/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'blue' 


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

// 1. where does the information go?
      // <div id="profile">
      //    <img src="https://image.shutterstock.com/image-vector/         ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="{traveler name}">
      //    <h2>{traveler Name}</h2>
      //    <em>{traveler Nickname}</em>
      // </div>

// 2. Add content from traveler object to the elements above

const profile = document.querySelector('#profile')

// added second 'profile' before removing first group of elements
// next time --> select existing elements and replace content
profile.querySelector('img').remove()
profile.querySelector('h2').remove()
profile.querySelector('em').remove()

profile.innerHTML +=
   `<img src=${traveler.photo}
   alt=${traveler.name}>
   <h2>${traveler.name}</h2>
   <em>${traveler.nickname}</em>`


/***** Deliverable 4 *****/

const animalSightings = traveler.animalSightings

// location and structre of new html elements:
   // <ul id="animals">
         // <li data-id="{animalSighting id}">
         // <p>{animal sighting description}</p>
         // <img src="{animal sighting photo}" alt="{animal sighting species}"/>
         // <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
         // </li>
   // </ul>

const ulAnimals = document.querySelector('#animals')

animalSightings.forEach(function(sighting) {

   const newLi = document.createElement('li')
   newLi.id = `${sighting.id}`
   const newP = document.createElement('p')
   newP.innerHTML = `${sighting.description}`
   const newImg = document.createElement('img')
   newImg.src = `${sighting.photo}`
   newImg.alt = `${sighting.species}`
   const newLink = document.createElement('a')
   newLink.href = `${sighting.link}`
   newLink.target="_blank"
   newLink.innerHTML = `Here's a video about the ${sighting.species} species!`

   newLi.append(newP, newImg, newLink)

   ulAnimals.append(newLi)
})



/***** Deliverable 5 *****/

document.getElementById('3').remove()
