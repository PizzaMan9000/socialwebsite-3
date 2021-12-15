var firebaseConfig = {
  apiKey: "AIzaSyBacOpXkHAZbZ0s2ZqbIlY6hxPzUCGfXd0",
  authDomain: "chatappproject-2f098.firebaseapp.com",
  databaseURL: "https://chatappproject-2f098-default-rtdb.firebaseio.com",
  projectId: "chatappproject-2f098",
  storageBucket: "chatappproject-2f098.appspot.com",
  messagingSenderId: "83926784973",
  appId: "1:83926784973:web:3e14225152a7a049f40284"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username-");
document.getElementById("username-display").innerHTML = "Welcome " + username + "!";

function addRoom() {
  roomName = document.getElementById("room_name").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adding room"
  });

  localStorage.setItem("roomName-", roomName);

  window.location = "kwitter_page.html";
  document.getElementById("room_name").value = "";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("rooms").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    Room_names = childKey;

    console.log("roomName-" + Room_names);
    row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("rooms").innerHTML += row;
  });
});
}
getData();

function redirectToRoomName(name) {
  console.log(name);

  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}