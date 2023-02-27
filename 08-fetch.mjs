//fetch wasnt available in node.. installed using 'npm install node-fetch'
//we need to import it as below.. and if we import it as below, it has to be a module. so named the file with a .mjs extension for module javascript

import fetch from 'node-fetch'


fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json() 
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})


fetch('http://baaaaad.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json() 
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})
