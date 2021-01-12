/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

// needed to defer the script so that the HTML would run, before the script

/***** Deliverable 2 *****/

header.style.color = "red"

// the header is already identified as a variable/element, so I updated the color of the text by calling .style.color on the variable


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector("div#profile")
// assigning profile to the profile part of the page

const profileImage = profile.querySelector("img")
// finds the image tag within the profile
profileImage.src = traveler.photo
profileImage.alt = traveler.name
// reassigned the source to the url & alt text from the traveler hash/variable

const profileName = profile.querySelector("h2")
// selects the h2 tag where the name should go
profileName.textContent = traveler.name
// updates text within the tag to traveler.name

const profileNickname = profile.querySelector("em")
// selects the em tag where the nickname should go
profileNickname.textContent = traveler.nickname
// updates text within the tag to traveler.nickname

/***** Deliverable 4 *****/

{/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */}

const animalsList = document.querySelector("ul")
// identifies the element where list items should be added to

traveler.animalSightings.forEach(function (animalObject){
    const newListItem = document.createElement("li")
        newListItem.dataset.id = animalObject.id
    const newP = document.createElement("p")
        newP.textContent = animalObject.description
    const newImg = document.createElement("img")
        newImg.src = animalObject.photo
        newImg.alt = animalObject.species
    const newLink = document.createElement("a")
        newLink.href = animalObject.link
        newLink.textContent = `Here's a video about the ${animalObject.species} species!`

    // creates the HTML for each list item
    newListItem.append(newP, newImg, newLink)
    // appends the p, img, and link tags to the new list item

    animalsList.append(newListItem)
    // appends each new list item to the parent list
})

// Faster way but more prone to cross scripting attack

// traveler.animalSightings.forEach(function (animalObject) {
//     animalsList.innerHTML +=
//     `<li data-id="${animalObject.id}">
//         <p>"${animalObject.description}"</p>
//         <img src="${animalObject.photo}" alt="${animalObject.species}"/>
//         <a href="${animalObject.link}" target="_blank">Here's a video about the ${animalObject.species} species!</a>
//     </li>`
// })


/***** Deliverable 5 *****/

const animalThree = document.querySelector(`[data-id='3']`)
// using the querySelector to find the first element with a data-id of 3, in this case it's the third animal
// alternatively, I could've been more specific to the list and used:
// animalsList.querySelector(`[data-id='3']`)
