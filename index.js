/***** Deliverable 1 *****/
const header = document.querySelector('h1#header')
console.log("Here's your header:", header)
 // used elements and element selector tool to find the correct tag that Amazon Trip text sits in
// defer the script first in the index.html file
// use the inspect element tool to find the tag and class i'm searching for
/***** Deliverable 2 *****/

header.style.color = 'green'
//we already obtained the h1#header instance...it has attributes
//found them by checking the console.dir(header)

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerName = document.querySelector('div#profile').children[1]
travelerName.textContent = traveler.name

const travelerNickname = document.querySelector('div#profile').children[2]
travelerNickname.textContent = traveler.nickname

const photo = document.querySelector('div#profile').children[0]
photo.src = traveler.photo
photo.alt = "puppy dog"

// FIND THE INDIVIDUAL INSTANCES, GET DOWN TO THE SPECIFIC CHILD
// CHANGED THE ATTRIBUTE

/***** Deliverable 4 *****/

const sightingsList = document.querySelector('ul#animals')
const animalSightingsArray = traveler.animalSightings

function singleSighting(object) {

    let sightingInstance =  document.createElement('li')

    sightingInstance.innerHTML = `<li data-id=${object.id}>
    <p>${object.description}</p>
    <img src="${object.photo}" alt="{animal sighting species}"/>
    <a href="${object.link}" target="_blank">Here's a video about the ${object.species} species!</a>
  </li>`

  sightingsList.append(sightingInstance)
}

function createAllSightings(array) {
array.forEach(function(sighting){
    singleSighting(sighting)
})
}

createAllSightings(animalSightingsArray)

// FIND THE UL OBJECT
// STORE THE SIGHTINGS IN AN ARRAY THAT CAN BE ITERATED OVER
// CREATE A CALLBACK FUNCTION THAT MAKES AN LI, SETS ITS ATTRIBUTES, AND APPENDS TO 
// THE UL ELEMENT
// CREATE A FUNCTION THAT TAKES IN THE CALLBACK AND RUNS IT
// ON THE sightingsArray


/***** Deliverable 5 *****/


document.querySelector('ul#animals').children[2].remove()

//HOW DO I GET TO "data-id-3" directly using a method and 
//AND NOT BY FINDING THE INDEX?