/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
// Added defer to the HTML Header

/***** Deliverable 2 *****/
header.style.color = "rgb(0, 72, 255)"
header.style.fontSize = "5rem"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const name = document.querySelector("#profile h2")
name.textContent = `${traveler.name}`

const nickname = document.querySelector("#profile em")
nickname.textContent = `${traveler.nickname}`

const likes = document.createElement("p")
likes.setAttribute('id', 'likes')
name.parentElement.appendChild(likes)
likes.textContent = `Likes: ${traveler.likes}  (Click to Add Like!)` 

const img = document.querySelector("#profile img")
img.src = `${traveler.photo}`
img.alt = `${traveler.name}`

// Can we access data.js because it is loaded in the HTML header before index.js?

/***** Deliverable 4 *****/
console.log(traveler.animalSightings)
const animals = document.querySelector("#animals")
// const ul = document.createElement("ul")

traveler.animalSightings.forEach(sighting => {
  let li = document.createElement("li")
  li.setAttribute('data-id', `${sighting.id}`)
  
  let p = document.createElement("p")
  p.textContent = `${sighting.description}`
  
  let image = document.createElement("img")
  image.setAttribute('src',`${sighting.photo}`)
  image.setAttribute('alt', `${sighting.species}`)
  
  let a = document.createElement("a")
  a.setAttribute("href", `${sighting.link}`)
  a.setAttribute("target", "_blank")
  let text = document.createTextNode(`Here's a video about the ${sighting.species} species!`)
  a.appendChild(text)
  // I Found createTextNode while googling. Other than the fact 
  // that textContent is an invalid method for <a></a>
  // it seems like is has the same setup as the <p></p>.
  // Why does .textContent not work?

  let tags = [p, image, a]
  tags.forEach(tag => li.appendChild(tag))
  
  animals.appendChild(li)
});

/***** Deliverable 5 *****/
const oopsies = document.querySelector("[data-id='3']")
oopsies.remove()




//// For Funsies

likes.addEventListener('click', _ => {
  
  addLikes()
  likes.style.color = randomColor()
  rotateRaffy()
})

const addLikes = _ => {
  traveler.likes++
  likes.textContent= `Likes: ${traveler.likes}  (Click to Add Like!)`
}

const randomColor = _ => {
  let colors = ["red", "blue", "magenta", "green", "cyan", "purple", "firebrick"]
  let rand = Math.floor(Math.random()*colors.length+1)
  return colors[rand]
}

const rotateRaffy = _ => {
  img.style.transition = "1s"
  const orig = "rotateY(0deg)"
  const spun = "rotateY(360deg)"
  img.style.transform = img.style.transform !== spun ? spun : orig
}