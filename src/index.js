console.log('hello webpack')

import './styles/main.scss'
import './fonts/Comfortaa-Bold.ttf'
import './images/image.jpg'

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

const root = document.querySelector('#root')
root.append(heading, p)