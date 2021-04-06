/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

// added defer to the script tag 

/***** Deliverable 2 *****/
const newHeader = document.querySelector('#header')

newHeader.style.color = 'red'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const firstNewImg = document.querySelector("#profile img")
firstNewImg.src = traveler.photo

firstNewImg.alt = traveler.name 

console.log(firstNewImg)

const travelerName = document.querySelector("#profile > h2")
travelerName.innerText = traveler.name 

const travelerNickName = document.querySelector("#profile > em")
travelerNickName.innerText = traveler.nickname 




    


/***** Deliverable 4 *****/

function renderSightings(animalSightings){
    const outerLi = document.createElement('li')
    
}

// we need to create a li element and then run a forEach loop to populate all of the sightings. Not quite sure how to set it up in this situation however. Deffinitely need to review it first.


/***** Deliverable 5 *****/
