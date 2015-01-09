var ws = new WebSocket("ws://localhost:3000"); // ws://will.princesspeach.nyc:3000
// var ws = new WebSocket("ws://will.princesspeach.nyc:3000");
var body = document.querySelector("body");
var input = document.querySelector("input");
var ul = document.createElement("ul");
var div = document.createElement("div");
body.appendChild(div);
div.appendChild(ul);
var userName = prompt("Please enter your name").trim();
var userColor = prompt("Type the name of the color for your text");

var addText = function(msg){
  var newli = document.createElement("li");
  var mssg = JSON.parse(msg); //unpack the message
  var printMessage = mssg.name + " : " + mssg.newMessage; //after unpack message and print.
  //console.log(mssg);
  var msg=mssg.newMessage;//hash key for the user's message value
  var messageArray=msg.split(" ");
  input.value= " ";
  for (i=0; i< messageArray.length; i++){
    if(messageArray[i] === "/yell"){
      messageArray.splice(i,1);
      for(i; i < messageArray.length; i++){
        messageArray[i]=(messageArray[i].toUpperCase());
        printMessage="<li>" + userName + " : " + messageArray.join(" ") + "</li>";
      }
    }
  }
  newli.style.color = mssg.color;//color for each user.
  newli.innerHTML = printMessage;
  var firstli = ul.firstChild;
  //ul.insertBefore(newli, firstli);
  var ula=document.querySelector("ul");
  ula.appendChild(newli);
  // ula.scrollTop = ula.scrollHeight; // this will make new text show without scroll down.
  var textarea=document.querySelector("#textarea");
  //div.insertBefore(ula,textarea);
}

ws.addEventListener("open", function(evt){

  console.log('connected');

  ws.addEventListener("message", function(evt){
    addText(evt.data);

    //image/hyperlink code
    var item = JSON.parse(evt.data);
    var li = document.createElement("li");
    ul.appendChild(li);
    input.value = " ";

    var message = item.newMessage;

    var firstfour = message.substring(0,5).trim();
    if(firstfour === "http"){
      console.log("Inside http!");
      var length = message.length;
      var lastthree =  message.substring(length-3,length);
      if (lastthree === "png" || lastthree === "jpg" || lastthree === "bmp" || lastthree === "gif"){
        message = "<img src='" + message + "'>";
      }
      else{
        message = "<a href='" + message + "'>" + message + "</a>";
      }
      console.log(message);
      message=printMessage;
      li.innerHTML=message;
    }
  });

  button.addEventListener("click", function(evt){
    var inputStr = document.querySelector("#textarea");//can work by using #button as well.
    var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
    var info = JSON.stringify(userMessage); //pack the message
    ws.send(info);
    input.value = " ";
  });

  input.addEventListener("keydown", function(evt){
    if(evt.keyCode === 13){
      var inputStr = document.querySelector("#textarea");
      var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
      var info = JSON.stringify(userMessage);//pack the message
      ws.send(info);
      input.value = " ";
    }
  });
});
