/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'purple'

/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

document.querySelector('div#profile h2').innerText = traveler.name
document.querySelector('div#profile em').innerText = traveler.nickname
document.querySelector('div#profile img').src = traveler.photo
document.querySelector('div#profile img').alt = traveler.name



/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (sightingObj){
    const sightings = document.querySelector('ul#animals')

    sightings.innerHTML +=
    `<li data-id="${sightingObj.id}">
        <p>${sightingObj.description}</p>
        <img src="${sightingObj.photo}" alt="${sightingObj.species}"/>
        <a href="${sightingObj.link}" target="_blank">Here's a video about the ${sightingObj.species} species!</a>
    </li>`




})




/***** Deliverable 5 *****/


document.querySelector("li[data-id='3']").remove()