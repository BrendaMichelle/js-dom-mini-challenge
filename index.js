/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

    let travelerName = document.querySelector('h2')
    let nickname = document.querySelector('div#profile em')
    let imageUrl = document.querySelector('div#profile img')

    travelerName.textContent = traveler.name
    nickname.textContent = traveler.nickname
    imageUrl.src = traveler.photo
    imageUrl.alt = "Raffy pic"



/***** Deliverable 4 *****/

 // we want to first grab the variable and the element we want to iterate through and use the forEach function

traveler.animalSightings.forEach(function (aniInfo) {

//then create elements and give them attributes 
    let li = document.createElement('li')
        li.dataset.id = aniInfo.id
    let p = document.createElement('p')
        p.textContent = aniInfo.description
    let img = document.createElement('img')
        img.src = aniInfo.photo
        img.alt = aniInfo.species
    let a = document.createElement('a')
        a.href = aniInfo.link
        a.target = '_blank'
        a.textContent = `Here's a video about the ${aniInfo.species} species!`

// target where we want to append these new elements, append the new elements in the right structure and then append to what is already on the dom, such as the ul
    let ul = document.querySelector('ul#animals')
        li.append(p, img, a)
        ul.append(li)

})


/***** Deliverable 5 *****/

document.querySelector('li[data-id="3"]').remove()
