/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const name = document.querySelector("h2")
name.textContent = traveler.name

const nickname = document.querySelector("em")
nickname.textContent = traveler.nickname

const img = document.querySelector("img")
img.src = traveler.photo

/***** Deliverable 4 *****/
const ul = document.querySelector("#animals")
traveler.animalSightings.forEach(function(animalObj){
     
    const li = document.createElement("li")
    li.dataset.id = animalObj.id

    const pTag = document.createElement("p")
    pTag.textContent = animalObj.description

    const animalImg = document.createElement("img")
    animalImg.src = animalObj.photo
    animalImg.alt = animalObj.species

    const aTag = document.createElement("a")
    aTag.href = animalObj.link
    aTag.target = "_blank"
    aTag.textContent = animalObj.link

    li.append(animalImg, pTag, aTag)
    ul.append(li)
}) 

/***** Deliverable 5 *****/

const remove = document.querySelector("[data-id='3']")
remove.remove() 