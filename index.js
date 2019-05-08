let unifi = require('node-unifiapi');
let r = unifi({
    baseUrl: 'https://3.211.95.239:8443', // The URL of the Unifi Controller
    username: 'accionet',
    password: 'dabunet159',
    debug: true, // More debug of the API (uses the debug module)
    // debugNet: true // Debug of the network requests (uses request module)
});
// r.list_sites()
//     .then(done => console.log('Site',done))
//     .catch(err => console.log('Error',err))
// r.list_guests(8670, 'n0lxg6gj')
//     .then(done => console.log('Guest',done))
//     .catch(err => console.log('Error',err))
// r.list_aps()
//     .then(done => console.log('APs',done))
//     .catch(err => console.log('Error',err))
// r.authorize_guest('cc:21:19:33:92:f5').then((a) => {
//   console.log(a);
// }).catch((e) => {
//   console.log(e);
// })

// r.authorize_guest('cc:21:19:33:92:f5','no limit', 'no limit', 'no limit', 'no limit', '78:8a:20:70:e7:c3','n0lxg6gj')
r.authorize_guest('cc:21:19:33:92:f5',undefined ,undefined ,undefined ,undefined ,undefined ,'n0lxg6gj')
    .then((data) => {
      console.log('Successful authorization', data);
      delay(10000).then(() => {
        console.log('no auth');
        r.unauthorize_guest('cc:21:19:33:92:f5').then((a) => {
          console.log(a);
        }).catch((e)=>{
          console.log(e);
        });
      });
    }).catch(err => console.log('Error', err))



const delay = (time) => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, time);
  });
};
