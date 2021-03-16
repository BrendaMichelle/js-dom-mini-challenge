/***** Deliverable 1 *****/
const header = document.querySelector("h1#header").style.color = "green";
console.log("Here's your header:", header)


/***** Deliverable 2 *****/



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travelerDiv = document.querySelector('div#profile')
travelerDiv.querySelector('img').src = `${traveler.photo}`
travelerDiv.querySelector('h2').textContent = `${traveler.name}` 
travelerDiv.querySelector('em').textContent = `${traveler.nickname}` 



/***** Deliverable 4 *****/

traveler.animalSightings.forEach(obj => {
    const li = document.createElement('li')
    li.dataset.id = obj.id

    li.innerHTML = `
        <p>${obj.description}</p>
        <img src="${obj.photo}" alt="${obj.species}"/>
        <a href="${obj.link}" target="_blank">Here's a video about the ${obj.species} species!</a>
    `

    document.querySelector('ul#animals').append(li)

})

document.querySelector("[data-id='3']").remove()



/***** Deliverable 5 *****/
