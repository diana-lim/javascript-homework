function responseOne() { 
  var a = document.getElementById("food1").value;
  var b = document.getElementById("food2").value;
  var c = document.getElementById("food3").value;
  var d = document.getElementById("food4").value;
  var e = document.getElementById("food5").value;

  alert("Wow, I like to eat " + a + ", " + b + ", " + c + ", " + d + ", " + "and " + e + " too!");
  //Message to be displayed top of list

  var firstmsg = document.getElementById("firstmessage");
  firstmsg.innerHTML = "Wow, I like to eat " + a + ", " + b + ", " + c + ", " + d + ", " + "and " + e + " too!";

  //Messages to be displayed under list

  var messageOne = "Wow, I like to eat " + a + ", " + b + ", " + c + ", " + d + ", " + "and " + e + " too!";

  var newitem = document.createElement("p");
  newitem.innerHTML = messageOne;

  var msglist = document.getElementById("foodlist");
  msglist.appendChild(newitem);
};

function responseTwo() {
  var a = document.getElementById("food1").value;
  var b = document.getElementById("food2").value;
  var c = document.getElementById("food3").value;

   alert("Wow, I like to eat " + a + ", " + b + ", " + "and " + c + " too!");

   //Messages to be displayed
  var messageTwo = "Wow, I like to eat " + a + ", " + b + ", " + "and " + c + " too!";

  var newitem = document.createElement("p");
  newitem.innerHTML = messageTwo;

  var msglist = document.getElementById("foodlist");
  msglist.appendChild(newitem);

};

function responseThree() {
  var c = document.getElementById("food3").value;
  var d = document.getElementById("food4").value;
  var e = document.getElementById("food5").value;

  alert("Wow, I like to eat " + c + ", " + d + ", " + "and " + e + " too!");
//Messages to be displayed
  var messageThree = "Wow, I like to eat " + c + ", " + d + ", " + "and " + e + " too!";

  var newitem = document.createElement("p");
  newitem.innerHTML = messageThree;

  var msglist = document.getElementById("foodlist");
  msglist.appendChild(newitem);

};