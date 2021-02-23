const div = document.createElement("div")
div.innerHTML = `<div id="profile">
                        <img src="${traveler.photo}"
                        alt="${traveler.name}">
                        <h2>${traveler.name}</h2>
                        <em>${traveler.nickname}</em>
                </div>
                    <h4>Great Sightings</h4>
                    <ul id="animals">
                        <!-- add an <li> for each animal sighting here -->
                    </ul>
                </div>`

const collectionHeader = document.querySelector("div.traveler")
collectionHeader.append(div)