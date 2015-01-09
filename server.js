var http = require("http");
var fs = require("fs");
var msg = "";
var server = http.createServer(function(request, response){
  console.log(request.url);
  var path = request.url;
  var tree = path.split("/");
  if (path === "/"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/chat/index.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/library/index.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/extra/edited_calc/oldcalc.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else {
    var path = request.url;
    path = path.slice(1);
    console.log("path is " + path)
    fs.readFile(path, function(err, data){
      response.end(data);
    });
  }
});
server.listen(2000);
// var fs = require("fs");
// var http = require("http");
// var server = http.createServer(function(request, response){
//   var path = request.url;
//   if(path.slice(path.length-4,path.length)==="html"){
//     var pathSplit = path.split("/");
//     //console.log(pathSplit);
//     if (pathSplit.length > 2){
//       var readProj = pathSplit.splice(1, pathSplit.length);
//       var readProjPath = readProj[0] + "/" + readProj[1];
//       console.log(readProjPath);
//       fs.readFile(readProjPath, function(err, data){
//         response.end(data);
//       });
//     }
//     else if (pathSplit.length <= 2){
//       var readHtml = pathSplit.splice(1,1);
//       //console.log(readHtml);
//       fs.readFile(readHtml.join(), function(err, data){
//         response.end(data);
//       });
//     }
//   }
//   else if (path === "/"){
//     fs.readFile("index.html", function(err, data){
//       response.end(data);
//     });
//   }
//   else if (path.slice(path.length-4,path.length)===".css"){
//     var readCss = path.split("/").splice(1,1);
//     fs.readFile(readCss.join(), function(err, data){
//       response.end(data);
//     });
//   }
//   else if (path.slice(path.length-3,path.length)===".js"){
//     var readJs = path.split("/").splice(1,1);
//     fs.readFile(readJs.join(), function(err, data){
//       response.end(data);
//     });
//   }
//   else if (path.slice(path.length-4,path.length) === ".png"){
//     var readPng = path.split("/").splice(2, 1).join();
//     //console.log(readPng);
//     fs.readFile("images/"+readPng, function(err, data){
//       response.end(data);
//     });
//   }
// });
// server.listen(2000);
