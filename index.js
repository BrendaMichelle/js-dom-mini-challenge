/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerName = document.querySelector('h2')
travelerName.textContent = traveler.name

const travelerNickName = document.querySelector('em')
travelerName.textContent = traveler.nickname

const travelerPhoto = document.querySelector('img')
travelerPhoto.src = traveler.photo
/***** Deliverable 4 *****/

traveler.animalSightings.forEach(function (animalOpject){
    const outerli = document.createElement('li')

    outerli.innerHTML=`
    <li data-id="${animalOpject.id}">
  <p>${animalOpject.description}</p>
  <img src="${animalOpject.photo}" alt="${animalOpject.photo}"/>
  <a href="${animalOpject.link}" target="_blank">Here's a video about the ${animalOpject.species} species!</a>
</li>
    `
    const collection = document.querySelector('ul#animals')
    collection.append(outerli)

})

/***** Deliverable 5 *****/
 document.querySelector("[data-id='3']").remove()