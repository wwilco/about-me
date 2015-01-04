//var ws = new WebSocket("ws://localhost:3000");
// var ws = new WebSocket("ws://will.princesspeach.nyc:3000");
var username = prompt("gimme yo name").trim();
var usercolor = prompt("gimme yo color");
var body=document.querySelector("body");
var div1 = document.createElement("div");
var ul=document.createElement("ul");
div1.appendChild(ul);
body.appendChild(div1);

ws.addEventListener("open", function(evt) {

  var input=document.querySelector("input");
  var button=document.querySelector("#button");
  body.appendChild(input);
  body.appendChild(button);

  var addText=function(msg){
    var newLi=document.createElement("li");
    newLi.innerHTML=msg;
    var msg2 = JSON.parse(msg);
    var printmsg = msg2.name + ': ' + msg2.message;
    //console.log(printmsg);
    newLi.innerHTML = printmsg;
    newLi.style.color = msg2.color;
    var firstli=ul.firstChild;
    ul.insertBefore(newLi,firstli);
    var ula=document.querySelector("ul");
    ula.appendChild(newLi);
    var msgtxt = msg.data;
    var msgarray = msgtxt.split(" ");
    for (var i = 0; i < msgtxt.length; i++){
      if (msgarray[i] === "/yell"){
        msgarray.splice(i, 1);
        for (var i = 0; i < msgarray.length; i++){
          msgarray[i] = (msgarray[i].toUpperCase());
        }
      }
    }
  }
  //prints message text to message box
  ws.addEventListener("message", function(evt) {
    addText(evt.data)
  })

  button.addEventListener("click",function(){
    ws.send(input.value); //this is send text to the server(terminal).
    input.value=" "; // it gives you new empty string.
  });

  input.addEventListener("keydown",function(evt){
    if(evt.keyCode === 13 ){
      // var text=input.value;
      var hash = {name: username, message: input.value, color: usercolor}
      var hashinfo = JSON.stringify(hash);
      ws.send(hashinfo);
      input.value= " ";
    }
  })

  // ws.addEventListener("message", function(x){
  //
  //   // var ul = document.querySelector("ul");
  //   // var newli = document.createElement("li");
  //   var msgtxt = x.data;
  //   var msgarray = msgtxt.split(" ");
  //   for (var i = 0; i < msgtxt.length; i++){
  //     if (msgarray[i] === "/yell"){
  //       msgarray.splice(i, 1);
  //       for (var i = 0; i < msgarray.length; i++){
  //         msgarray[i] = (msgarray[i].toUpperCase());
  //       }
  //     }
  //   }
    // newli.innerHTML = "<li>" + msgarray.join(" ") + "</li>";
    // ul.appendChild(newli);


});
