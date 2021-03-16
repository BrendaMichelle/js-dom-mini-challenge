/***** Deliverable 1 *****/
const header = document.querySelector('h1')
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'blue'

/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)
//1. Find the element we're interested in
const profile = document.querySelector('div#profile')
//2. update the property of that element
const img = profile.querySelector('img')
img.src = traveler.photo 
img.alt = traveler.name

const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname

// console.log(em)


/***** Deliverable 4 *****/
//1. be able to iterate through array
//2. can use console.log as a callback function
//3. establish an outer element
const ul = document.querySelector('ul#animals')
//5. move to outer scope for cleanliness 
traveler.animalSightings.forEach(function (animalSightingObject) {
    // console.log(animalSightingObject)

    const li = document.createElement('li')
    li.dataset.id = animalSightingObject.id //distinguish one animal sighting from another animal sighting
    // console.log(li)

    li.innerHTML = `
    <p>${animalSightingObject.description}</p>
    <img src="${animalSightingObject.photo}" alt="${animalSightingObject.species}"/>
    <a href="${animalSightingObject.link}" target="_blank">Here's a video about the ${animalSightingObject.species} species!</a>`

    //4.append to the page
    const ul = document.querySelector('ul#animals')
    ul.append(li)

})



/***** Deliverable 5 *****/

//1. find the element you want to delete
const liToRemove = document.querySelector('[data-id="3"]')

// console.log(liToRemove)

//2. actually remove it 
liToRemove.remove()