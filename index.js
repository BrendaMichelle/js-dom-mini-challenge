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



/***** Deliverable 5 *****/
