/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
// Need to include defer in my html doc, script tag, to differ the execution of 
// the JS file until it finishes loading the HTML body file.

/***** Deliverable 2 *****/
// to find the write attribute I console.dir(header) and find the style.color attribute.
 header.style.color = 'blue'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const travelerImg = document.querySelector('div#profile img')
travelerImg.src = traveler.photo
travelerImg.alt = traveler.nickname
const travelerName = document.querySelector('div#profile h2')
travelerName.innerText = traveler.name
const travelerNick = document.querySelector('div#profile em')
travelerNick.innerText = traveler.nickname

/***** Deliverable 4 *****/

function renderOneCard(animalSighting){

    const listData = document.createElement('li')
        listData.dataset.id = animalSighting.id
    const listP = document.createElement('p')
        listP.innerText = animalSighting.description
    const listImg = document.createElement('img')
        listImg.src = animalSighting.photo
        listImg.alt = animalSighting.species
    const listLink = document.createElement('a')
        listLink.href = animalSighting.link

    listImg.append(listImg.src, listImg.alt)
    listLink.append(listLink.href)

    listData.append(listP, listImg, listLink )

    const mainCard = document.querySelector('ul#animals')
    mainCard.append(listData)

}


function renderAllCard(){
    traveler.animalSightings.forEach(function(animalSighting){
        renderOneCard(animalSighting)
    })
    
}

renderAllCard()

/***** Deliverable 5 *****/


const snuckElement = document.querySelector('[data-id = "3"]')
snuckElement.remove()









