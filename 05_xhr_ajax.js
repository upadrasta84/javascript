// Making an HTTP request - XMLHttpRequest is not available in node. to use it do ' npm install xhr2'
//created free acct in restcountries.eu
//got api id as 87728d65a586a03a2aa381d8e3403a19

var XMLHttpRequest = require('xhr2');


const mypuzzle = (mycallback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => { //this callback function is also an example of closure. described towards the end
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            mycallback(undefined, data)
        } else if (e.target.readyState === 4) {
            console.log('An error has taken place')
            mycallback(e, 'nodata')
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3') //by passing 3rd param as 'false', request will be synchronous, which is deprecated by JS and also not implemented by node
    request.send()
}


mypuzzle((error, data) => {
    console.log(data)
    console.log(error)
});


//above was to handle response using callbacks.. below is without.. above is better version

const countryCode = "IN"
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    console.log('got response', e.target.readyState, e.target.status)
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.readyStatet === 4) {
        console.log('Unable to fetch data')
    }
})

countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=87728d65a586a03a2aa381d8e3403a19')
countryRequest.send()


