/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
const tName = document.querySelector("#name")
const nickname = document.querySelector("#nickname")
const photo = document.querySelector("#photo")
tName.innerHTML = traveler.name;
nickname.innerHTML = traveler.nickname;
photo.src = traveler.photo;
photo.alt = traveler.name
console.log('This is what the traveler object looks like: ', traveler)


/***** Deliverable 4 *****/
traveler.animalSightings.forEach(function (value, key){
    var li = document.createElement("li");
    var p = document.createElement("p");
    var a = document.createElement("a")
    var pText = document.createTextNode(value.description)
    p.append(pText)
    var img = document.createElement("img");
    img.src = value.photo
    img.alt = value.species
    a.href = value.link
    a.target = "_blank" 
    var aText = document.createTextNode("Here is a video about the " + value.species + "species!")
    a.append(aText)
    li.setAttribute('data-id' , value.id);
    li.appendChild(p);
    li.appendChild(img);
    li.appendChild(a)
    document.querySelector("#animals").appendChild(li);
    
})


/***** Deliverable 5 *****/
document.querySelector("[data-id = '3']").remove()