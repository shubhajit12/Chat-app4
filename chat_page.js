//YOUR FIREBASE LINKS
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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("roomname");

  function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
    });
    document.getElementById("message").value="";
  }

  //Start code
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    

//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data["name"];
 message=message_data["message"];
 likes=message_data["likes"];

 namewithtag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
 messagewithtag="<h4 id='message'>"+message+"</h4>";
 buttonwithtag="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+likes+" onclick='updateLikes(this.id)'>Likes: "+likes+"</button>";
 row=namewithtag+messagewithtag+buttonwithtag;
 document.getElementById("output").innerHTML+=row;
//End code
} });  }); }
getData();

function updateLikes(message_id){
console.log(message_id);
button_id=message_id;
like=document.getElementById(button_id).value;
updated_likes=Number(like)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
  likes:updated_likes
});
//End code
}