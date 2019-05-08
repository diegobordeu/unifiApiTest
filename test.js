var unifi = require('node-unifi');

var controller = new unifi.Controller("3.211.95.239", 8443);

// LOGIN
controller.login("accionet", "dabunet159", function(err) {

  if(err) {
    console.log('ERROR: ' + err);
    return;
  }

  // GET SITE STATS
  // controller.getSitesStats(function(err, sites) {
  //   console.log('getSitesStats: ' + sites[1].name + ' : ' + sites.length);
  //   // console.log(JSON.stringify(sites));
  //   console.log(sites);
  //
  //   // GET SITE SYSINFO
  //   controller.getSiteSysinfo(sites[1].name, function(err, sysinfo) {
  //     console.log('getSiteSysinfo: ' + sysinfo.length);
  //     // console.log(JSON.stringify(sysinfo));
  //     console.log(sysinfo);
  //     // GET CLIENT DEVICES
  //     controller.getClientDevices(sites[1].name, function(err, client_data) {
  //       console.log('getClientDevices: ' + client_data[0].length);
  //       // console.log(JSON.stringify(client_data));
  //       console.log(client_data);
  //       // GET ALL USERS EVER CONNECTED
  //       controller.getAllUsers(sites[1].name, function(err, users_data) {
  //         console.log('getAllUsers: ' + users_data[0].length);
  //         // console.log(JSON.stringify(users_data));
  //         console.log(users_data);
  //         // FINALIZE, LOGOUT AND FINISH
  //         controller.logout();
  //       });
  //     });
  //   });
  // });
  controller.authorizeGuest('test', 'cc:21:19:33:92:f5', 30);
});
