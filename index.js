/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)
//Had to change the index.js script to defer afterwards

/***** Deliverable 2 *****/

header.style.color = "blue"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
//Available because linked in index.html file with: <script src="data.js"></script>
const travName = document.querySelector('h2')
const travNick = document.querySelector('em')
const travPic = document.querySelector('img')
travName.textContent = traveler.name
travNick.textContent = traveler.nickname
travPic.src = traveler.photo

//I'm still trying to figure out how I got here, trial and error


/***** Deliverable 4 *****/

//Iterating over animalSightings nested in traveler
//creating a new li in the html.index
//appended the inner HTML to update dynamically

traveler.animalSightings.forEach(function(object){
    const outerDiv = document.createElement('li')


    outerDiv.innerHTML = `
    <li data-id="${object.id}">
  <p>${object.description}</p>
  <img src="${object.photo}" alt="${object.species}"/>
  <a href="${object.link}" target="_blank">Here's a video about the ${object.species} species!</a>
</li>`

const collection = document.querySelector('#animals')
collection.append(outerDiv)


})


/***** Deliverable 5 *****/

const numThree = document.querySelector('[data-id="3"]')
numThree.remove()