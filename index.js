const global = require('global')
const doc = require('global/document')
const bulma = require('./main.sass')
require('impress.js')
const impress = global.impress()
const React = require('react')
const ReactDOM = require('react-dom')

const c = () => [global.innerWidth / 2, global.innerHeight / 2]

function Step(props, i, steps){
    alert(i)
    const sc = steps.length 
    const m = Math.floor(sc/2)
    const p = m - sc + i
    return <div key={"step_"+i} className={'step'} data-x={props.x * p } data-y={props.y}>
            <h1 className="title has-text-centered">{props.title}</h1>
            {props.cont}
           </div>
}

const steps = [
    {
        title: 'Intro',
        slide: 'intro',
        content: <h2 className="title is-2">"wtf"</h2>,
        x: global.innerWidth,
        y: global.innerHeight,
        d: 0
    },
    {
        title: 'outrO',
        slide: 'intro',
        content: <b>z</b>,
        x: global.innerWidth,
        y: global.innerHeight,
        d: 0

    }
]

ReactDOM.render(<div className="tile is-12 is-relative">{steps.map(Step)}</div>, doc.querySelector('#impress'))

function alert(i){
    if (i === steps.length - 1) setTimeout(() => {
        impress.init()
        doc.querySelector('html').style.overflowY = 'hidden'
    }, 0)
}
