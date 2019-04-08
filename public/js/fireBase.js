var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAh883Kevc_L9EEgsIkVlE1dGSQirwX6fg",
  authDomain: "traveldiary-7e071.firebaseapp.com",
  databaseURL: "https://traveldiary-7e071.firebaseio.com",
  projectId: "traveldiary-7e071",
  storageBucket: "",
  messagingSenderId: "992156628329"
};
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}