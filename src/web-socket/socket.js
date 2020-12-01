const io = require('socket.io-client')
export const SITEKEY = 'needed-endurable-plough'

const socket = io.connect('https://api.mountkelvin.com', {
    reconnectionDelay: 1000,
    reconnectionDelayMax: 3000,
    transports: ['websocket'],
})


socket.on('connect', () => {
    console.log('Connected to the server ...')
    socket.emit('subscribe', { siteKey: SITEKEY })
})

socket.on('siteKeyFound', ({ siteKey, data }) => {
    console.log("Valid key " + siteKey)

    socket.emit('apply/scene', {
        siteKey: SITEKEY,
        data: {
          id: '<sceneId>',
        },
      })

})

socket.on('noSuchSiteKey', ({ siteKey }) => {
    console.log('Not found ' + siteKey)
})

socket.on('siteKeyExpired', ({ siteKey }) => {
    console.log('Key expired ' + siteKey)
})

socket.on('offline', ({ siteKey }) => {
    console.log('offline')
})

socket.on('site', ({ siteKey, data }) => {
    console.log('congfig change')
})

socket.on('peripheralInput', ({ siteKey, data }) => {
    console.log('switch is pressed or a motion sensor detects movement')
})


socket.on('sensorData', ({ siteKey, data }) => {
    console.log('sensor emits data')
})