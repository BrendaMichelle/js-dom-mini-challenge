/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "goldenrod"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profile = document.querySelector(".traveler")
profile.innerHTML = `<div id="profile">
<img src= "${traveler.photo}"
  alt="${traveler.name}">
<h2>${traveler.name}</h2>
<em>${traveler.nickname}</em>
</div>
<h4>Great Sightings</h4>
<ul id="animals">
<!-- add an <li> for each animal sighting here -->
</ul>`

/*articlesArray.forEach(function (article) {
    console.log(article)
    // create outer most element
    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.id = article.id
    card.dataset.beef = "here is another example"


/***** Deliverable 4 *****/

const listOfSightings = document.querySelector("ul#animals")

traveler.animalSightings.forEach (function (sighting) {
    let thisSighting = document.createElement ("li")
    thisSighting.dataset.id = sighting.id
    thisSighting.innerHTML = ` <p>${sighting.description}</p>
    <img src="${sighting.photo}" alt="${sighting.species}"/>
    <a href="${sighting.link}" target="_blank">Here's a video about the ${sighting.species} species!</a>
  </li>`

  listOfSightings.append(thisSighting)
})


/***** Deliverable 5 *****/

document.querySelector("li[data-id='3']").remove()