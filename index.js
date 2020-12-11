/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
profilediv = document.querySelector('div#profile')
profilediv.children[1].innerText = traveler.name
profilediv.children[0].src = traveler.photo
profilediv.querySelector('em').innerText = traveler.nickname
profilediv.querySelector('img').alt = traveler.name

/***** Deliverable 4 *****/


const sightings = traveler.animalSightings


let ul = document.querySelector('ul#animals')



sightings.forEach(function (sighting) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let a = document.createElement('a')

    li.setAttribute('data-id', `${sighting.id}`)

    ul.append(li)
    li.append(p, img, a)

    p.innerText = sighting.description
    img.src = sighting.photo
    img.alt = sighting.species 
    a.href = sighting.link
    a.target = "_blank"
    a.innerText = `Here's a video about the ${sighting.species} species!`
    
})

/***** Deliverable 5 *****/

// ul.children[2].remove()
ul.querySelector('[data-id="3"]').remove()
