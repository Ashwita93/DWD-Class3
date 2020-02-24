const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'http://hp-api.herokuapp.com/api/characters', true)
request.open('GET', 'http://hp-api.herokuapp.com/api/characters/students', true)

request.onload = function(){
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(character => {
            console.log(character.name + ',' + character.species + ',' + character.house )
            
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            //to show hp character names 
            const charName = document.createElement('div')
            charName.setAttribute('class','charName')
            charName.textContent = character.name;

            //to show hp character Images
            const charImage = document.createElement('img')
            charImage.setAttribute('class','charImage')
            charImage.src = character.image;

            //finally appending all of these details into the card
            container.appendChild(card)
            card.appendChild(charName)
            card.appendChild(charImage)
        })
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()