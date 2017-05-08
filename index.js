const global = require('global')
const doc = require('global/document')
const bulma = require('./main.sass')
require('impress.js')
const impress = global.impress()

const c = () => [global.innerWidth / 2, global.innerHeight / 2]


const make_step = ({title, slide, content, x, y}, i, steps) => {
    const [l,t] = c()
    const s = doc.createElement('div')
    s.className = `step ${slide}`
    s.dataset.x = (-l + (i*x)).toString(10)
    s.dataset.y = y
    const q = doc.createElement('q')
    const h1 = doc.createElement('h1')
    h1.className = 'title'
    h1.textContent = title
    s.appendChild(h1)
    const contentText = doc.createTextNode(content)
    q.appendChild(contentText)
    s.appendChild(q)
    return s 
}

const impressContainer = doc.querySelector('#impress')
const steps = [
    {
        title: 'Intro',
        slide: 'intro',
        content: 'hello world',
        x: global.innerWidth,
        y: global.innerHeight
    },
    {
        slide: 'intro',
        content: 'hello world2',
        x: global.innerWidth,
        y: global.innerHeight
    }
]

steps.map(make_step).forEach((s, i) => {
    impressContainer.appendChild(s)
    alert(i)
})


function alert(i){
    if (i === steps.length - 1) setTimeout(() => {
        impress.init()
        doc.querySelector('html').style.overflowY = 'hidden'
    }, 0)
}
