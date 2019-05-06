let unifi = require('node-unifiapi');
let r = unifi({
    baseUrl: 'https://3.211.95.239:8443', // The URL of the Unifi Controller
    username: 'accionet',
    password: 'dabunet159',
    debug: true, // More debug of the API (uses the debug module)
    // debugNet: true // Debug of the network requests (uses request module)
});
r.list_sites()
    .then(done => console.log('Success',done))
    .catch(err => console.log('Error',err))
r.list_guests()
    .then(done => console.log('Success',done))
    .catch(err => console.log('Error',err))
r.list_aps()
    .then(done => console.log('Success',done))
    .catch(err => console.log('Error',err))
