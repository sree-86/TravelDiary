// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAH0qvoOwlu4Vmg6s4_L6OBXHlIlirt26k",
    authDomain: "travel-diary-mapd.firebaseapp.com",
    databaseURL: "https://travel-diary-mapd.firebaseio.com",
    projectId: "travel-diary-mapd",
    storageBucket: "travel-diary-mapd.appspot.com",
    messagingSenderId: "618580698774"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('trip');
  
  // Listen for form submit
  document.getElementById('tripForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var title = getInputVal('title');
    var location = getInputVal('location');
    var hotel = getInputVal('hotel');
    var att = getInputVal('att');
    var des = getInputVal('des');
  
    // Save message
    saveMessage(title, location, hotel, att, des);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('tripForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(title, location, hotel, att, des){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      title: title,
      location:location,
      hotel:hotel,
      att:att,
      des:des
    });
  }