var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAH0qvoOwlu4Vmg6s4_L6OBXHlIlirt26k",
  authDomain: "travel-diary-mapd.firebaseapp.com",
  databaseURL: "https://travel-diary-mapd.firebaseio.com",
  projectId: "travel-diary-mapd",
  storageBucket: "travel-diary-mapd.appspot.com",
  messagingSenderId: "618580698774"
};
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}