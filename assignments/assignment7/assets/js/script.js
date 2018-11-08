// Initialize Firebase
var config = {
    apiKey: "AIzaSyAxPyotWrV8KAO_kI5RBrs_gfzuLgpA4AM",
    authDomain: "bootcampassignment7.firebaseapp.com",
    databaseURL: "https://bootcampassignment7.firebaseio.com",
    projectId: "bootcampassignment7",
    storageBucket: "bootcampassignment7.appspot.com",
    messagingSenderId: "605808050567"
  };
firebase.initializeApp(config);

var testVar = "tesst";

var database = firebase.database();
database.ref().on("value", function(snapshot) {
    database.ref().set({
        testVariable: testVar
    });
}, function(errorObject) {
    console.error("The read failed: " + errorObject.code);
});