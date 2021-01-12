/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/


header.style.color = "pink"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

document.querySelector('h2').innerText = traveler.name 
document.querySelector('div#profile em').innerText = traveler.nickname 
document.querySelector('img').src = traveler.photo
document.querySelector('img').alt = traveler.name


/***** Deliverable 4 *****/


// animalSightings: [
//     {
//       id: 1,
//       travelerId: 1,
//       species: "frog",
//       photo: "pics/frog.jpg",
//       link: "https://youtu.be/Fa_I68L_APY",
//       description: "I saw this beautiful green frog resting on a leaf!"
//     }

traveler.animalSightings.forEach(function (animalObject){
    const sightings = document.querySelector('ul#animals')
    sightings.innerHTML += 
        `<li data-id="${animalObject.id}">
            <p>${animalObject.description}</p>
            <img src="${animalObject.photo}" alt="${animalObject.species}"/>
            <a href="${animalObject.link}" target="_blank">Here's a video about the ${animalObject.species} species!</a>
        </li>`
})

/***** Deliverable 5 *****/

document.querySelector("li[data-id='3']").remove()
