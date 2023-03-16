var firebaseConfig = {
    apiKey: "AIzaSyAGBnHG7lUXgnWCu0A1WCFUJGpPb-ifrMU",
    authDomain: "kwitter-533a7.firebaseapp.com",
    databaseURL: "https://kwitter-533a7-default-rtdb.firebaseio.com",
    projectId: "kwitter-533a7",
    storageBucket: "kwitter-533a7.appspot.com",
    messagingSenderId: "529715734027",
    appId: "1:529715734027:web:01a9cfc9a3617a7166090e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+user_name;

function addroom(){
    roomname=document.getElementById("roomname").value;
    localStorage.setItem("roomname",roomname);
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
    });
    window.location="chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Roomname: "+Room_names);
  row="<div class='roomname' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function redirect(name){
    console.log("roomname",name);
    localStorage.setItem("roomname",name);
    window.location="chat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location="index.html";
}
