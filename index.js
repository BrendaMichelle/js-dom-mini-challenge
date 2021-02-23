/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "silver"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)
// Using the `traveler` object, update the DOM to show the traveler's *name*, *nickname*, and *photo* in the appropriate places. For the `<img>` tag, make sure to update the `src` attribute *and* the `alt` attribute (it's important for accessibility).
const heading2 = document.querySelector('h2')
const em = document.querySelector('em')
const profileImg = document.querySelector('#profile img')

// Update each attributes
heading2.textContent = traveler.name 
em.textContent = traveler.nickname
profileImg.src = traveler.photo
profileImg.alt = traveler.nickname


/***** Deliverable 4 *****/
// First we will grab the ul element in our DOM, then we will loop through the traveler.animalSighting array to create each li elements.

const ul = document.querySelector('ul#animals')
traveler.animalSightings.forEach(function(sighting) {

    // Create each child li tag
    const li = document.createElement('li')
    li.dataset.id = sighting.id 

    // Create p tag, which is child of li tag
    const ptag = document.createElement('p')
    ptag.textContent = sighting.description

    // Create sibling of p tag
    const imgtag = document.createElement('img')
    imgtag.src = sighting.photo 
    imgtag.alt = sighting.species

    // Create sibling of img tag
    const link_tag = document.createElement('a')
    link_tag.href = sighting.link
    link_tag.target = "_blank"
    link_tag.textContent = `Here's a video about the ${sighting.species} species!`

    // Append each child to the li tag
    li.append(ptag)
    li.append(imgtag)
    li.append(link_tag)

    // Finally append li to parent ul tag
    ul.append(li)
})


/***** Deliverable 5 *****/

// There're a few ways to remove the element: style.display = none; innerHTML = ""; or remove(). First we will grab the element with
// data-id='3', then we will remove it.

const dataID3 = document.querySelector('[data-id="3"]')
// dataID3.style.display = "None"
dataID3.innerHTML = ""


