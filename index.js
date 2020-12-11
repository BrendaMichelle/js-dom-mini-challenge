/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

document.getElementById("header").style.color = "orange"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

let profile = document.getElementById("profile")
let h2ToUpdate = profile.querySelector("h2")
h2ToUpdate.textContent = `${traveler.name}`

let emToUpdate = profile.querySelector("em")
emToUpdate.textContent = `${traveler.nickname}`

imgToUpdate = profile.querySelector("img")
imgToUpdate.setAttribute('src', `${traveler.photo}`)
imgToUpdate.setAttribute('alt', `${traveler.name}`)


/***** Deliverable 4 *****/

let animals = document.querySelector("ul#animals")

animalSightings = [ 
    {  id: 1,
        travelerId: 1,
        species: "frog",
        photo: "pics/frog.jpg",
        link: "https://youtu.be/Fa_I68L_APY",
        description: "I saw this beautiful green frog resting on a leaf!"
      },
      {
        id: 2,
        travelerId: 1,
        species: "monkey",
        photo: "pics/monkey.jpg",
        link: "https://youtu.be/dy-u0voqixQ",
        description: "I was so impressed by the monkey's fantastic leaps!"
      },
      {
        id: 3,
        travelerId: 1,
        species: "centipede",
        photo: "pics/centipede.JPG",
        link: "https://youtu.be/vgxv8aAs6UE",
        description: "Wow!...what an experience!"
      },
      {
        id: 4,
        travelerId: 1,
        species: "butterfly",
        photo: "pics/butterfly.JPG",
        link: "https://youtu.be/1z1bfyV4cF0",
        description: "What a sight!"
    }
]

animalSightings.forEach(function (animalObj) {

    let li = document.createElement('li')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let a = document.createElement('a')

    li.id = animalObj.id
    p.textContent = animalObj.description
    img.src = animalObj.photo
    img.alt = animalObj.species
    a.href = animalObj.link 
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObj.species} species!`

    let animals = document.querySelector("ul#animals")
    li.append(p, img, a)
    animals.append(li)

})


/***** Deliverable 5 *****/

let third = document.getElementById(3)
third.remove()

