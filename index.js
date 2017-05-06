const global = require('global')
const window = require('global/window')
const impress = require('impress.js')
console.log(impress)
const z = (global) => {
    Object.keys(global).filter(x => {
        return /.*imp.*/mgi.test(x)
    }).forEach((x) => {
        console.log(x)
    })
    console.log(global.impress)
}

//z(global)
//z(window)
//impress().init()
