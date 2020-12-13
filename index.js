/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = "skyblue";

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const travName = document.querySelector("#profile h2")
travName.textContent = traveler.name

const travNickName = document.querySelector("#profile em") 
travNickName.textContent = traveler.nickname

const travPhoto = document.querySelector("#profile img")
travPhoto.src = traveler.photo
travPhoto.alt = traveler.name 

/***** Deliverable 4 *****/
list = document.querySelector("#animals")

traveler.animalSightings.forEach(function(obj){

    const li = document.createElement("li")
    li.setAttribute("data-id", obj.id)

    const p = document.createElement("p")
    p.textContent = obj.description

    const img = document.createElement("img")
    img.src = obj.photo 
    img.alt = obj.species 

    const a = document.createElement("a")
    a.href = obj.link 

    li.append(p, img, a)
    list.append(li)
})
/***** Deliverable 5 *****/
const badAnimal = document.querySelector("li[data-id = '3']")
badAnimal.remove()