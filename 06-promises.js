var XMLHttpRequest = require('xhr2');


// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined)
        callback(undefined, 'This is my callback data')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// Promise - it is an easier alternative to callbacks
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('This is my promise error')
        reject('This is my promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

//----------------------------------------------------------------------------------------------------------------------


//below is an even better way using promises than callbacks:
//we are getting 429 error as we are sending too many requests.. it is ok to ignore but both the above and below calls work just fine


const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyStatet === 4) {
            reject('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=87728d65a586a03a2aa381d8e3403a19')
    countryRequest.send()
})
getCountry('MX').then((country) => {
    console.log('got the country',country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})

//if we use 2 callbacks for doing 2 async things, it becomes harder with callbacks. promise chaining will be a better method to do such things
//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

//promise chaining

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise('10').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----
