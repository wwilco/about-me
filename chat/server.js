var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
var history = [];
// var badword = ["gew", "goo", "eww"];
server.on("connection", function(ws){
  if(history.length >= 1){
    history.forEach(function(message){
      ws.send(message);
    })
  }
  clients.push(ws);
  clients.forEach(function(client){
    client.send("Someone has joined the chatroom! Neato!");
  })
  console.log(clients.length + " clients are in the room");

  ws.on("message",function(message){
    history.push(message);
    console.log(message);
    for (i = 0; i < clients.length; i++){
      clients[i].send(message);
    }
    // var hash = JSON.parse(message); //put inside for loop?
    // var hashinfo = (hash.name + ": " + hash.message + ": " + hash.color);
    // var hashword = hashinfo.toString().trim();
    // console.log(hashword)
    // console.log(badword)
    // for (i = 0; i < badword.length; i++){
    //   if (hash.message === badword[i]){
    //     var badbad = true;
    //   }
    //   if (badbad === true){
    //     ws.close();
    //   }
    // }
  })
  ws.on("close",function(){
    var x = clients.indexOf(ws);
    clients.splice(x,1);
    console.log(clients.name + " clients are  still in the room");
    clients.forEach(function(client){
      client.send("Oh no someone left!");
    })
  })
})


// var Websocket = require("ws").Server;
// var server = new Websocket({port:3000});
// var clients = [];
// //var history = [];
// //var badwrd = [shit, fuck, piss, ass];
// server.on("connection", function(ws){
//   clients.push(ws);
//   clients.forEach(function(client){
//     client.send("you joined the chat!");
//     //ws.send(hist);
//   })
//   console.log(clients.length + " clients are in the room");
//   ws.on("message",function(message){
//     console.log(message);
//     for (i=0;i<clients.length;i++){
//       clients[i].send(message);
//       //history.send(message);
//     }
//   })
//   ////jason's stuf
//   // if (history.length >= 1){
//   //   history.forEach(function(message){
//   //     ws.send(message);
//   //   })
//   // }
// ws.on("message", function(message){
// //   //history.push(message);
//   console.log(message);
//   ws.send(message);
// })
// var hist = history.join("\n"); //makes a break in a string
//ws.send(hist);
//
//   ws.on("close",function(message){
//     var x = clients.indexOf(ws);
//     clients.splice(x,1);
//     console.log(clients.length + " clients are  still in the room");
//     clients.forEach(function(client){
//       client.send("Oh no someone left!");
//     })
//   //})
// });

// var Websocket = require("ws").Server;
// var server = new Websocket({port:3000});
// var clients = [];
// var history = [];
// server.on("connection", function(ws){
//   clients.push(ws);
//   clients.forEach(function(client){
//     client.send("you joined the chat!");
//     //ws.send(hist);
//     // setInterval(function(ws){
//     // client.send("Hello!");
//     // },3000)
//   })
//   console.log(clients.length + " clients are in the room");
//   ws.on("message",function(message){
//     console.log(message);
//     for (i=0;i<clients.length;i++){
//       clients[i].send(message);
//       //history.send(message);
//     }
//   })
//   ws.on("message", function(message){
//     //history.push(message);
//     //console.log(message);
//     //ws.send(message);
//   })
//   var hist = history.join("\n"); //makes a break in a string
//   //ws.send(hist);
//   ws.on("close",function(){
//     var x = clients.indexOf(ws);
//     clients.splice(x,1);
//     console.log(clients.length + " clients are still in the room");
//     clients.forEach(function(client){
//       client.send("Oh no someone left!");
//     })
//   })
// })
