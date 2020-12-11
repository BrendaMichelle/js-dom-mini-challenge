/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'yellow'
header.style.background = 'blue'

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

// name
let travelerName = document.querySelector("h2")
travelerName.textContent = `${traveler.name}`

// nickname
let travelerNickname = document.querySelector("em")
travelerNickname.textContent = `${traveler.nickname}`

// image WITH src and alt

// let travelerImageSrc = document.querySelector("img").src 
// travelerImageSrc.textContent = `${traveler.photo}`

document.querySelector("img").src = `${traveler.photo}`

// The commented out version is how I feel like this should work, but it isn't working. I can only 
// get this to work with the above line of code, which feels icky to me. Is this what it should be?

document.querySelector("img").alt = `${traveler.nickname}`

// Same as the above comment. This feels weird to change things directly, rather than through a variable,
// but for some reason, the variable wasn't working. 

/***** Deliverable 4 *****/

traveler.animalSightings.forEach ( function (sightings) {
    let li = document.createElement('li') 

)}

/***** Deliverable 5 *****/
