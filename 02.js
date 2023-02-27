/*installed lite-server using npm i lite-server */
//start it using 'npx lite-server'

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.preventDefault() //this is usually used for submits of form. This will prevent the page from being reloaded or whatever the default behavior may be
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})


const summary = document.createElement('h2')
summary.textContent = `You have ${notes.length} todos left`
document.querySelector('body').appendChild(summary)

//debugger //this will cause browser to pause loading and open the debugger



window.addEventListener('storage', function(e) {
    console.log('something changed in storage')
})


localStorage.setItem('myname', 'karthik')
console.log('item set')
localStorage.getItem('myname')
console.log('item retrieved',localStorage.getItem('myname'))
localStorage.removeItem('myname')
console.log('item deleted')
localStorage.clear()
console.log('all items deleted')

