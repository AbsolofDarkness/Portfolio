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

var trainNamesLocal = "";
var trainDestinationLocal = "";
var firstTrainTimeLocal = "";
var frequencyLocal = "";

var database = firebase.database();
database.ref().on("value", function(snapshot) {
    // database.ref().set({
    //     numOfTrains: numOfTrainsLocal,
    //     trainNames: trainNamesLocal,
    //     trainDestination: trainDestinationLocal,
    //     firstTrainTime: firstTrainTimeLocal,
    //     trainFrequency: frequencyLocal
    // });
}, function(errorObject) {
    console.error("The read failed: " + errorObject.code);
});

$(document).ready(function() {
    // Add colon to time
    $("#firstTrainTime").keypress(function() {
        if($(this).val().length == 2) {
            $(this).val($(this).val() + ":");
        }
    });
});

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    trainNamesLocal = $("#trainName").val().trim();
    trainDestinationLocal = $("#destination").val().trim();
    firstTrainTimeLocal = $("#firstTrainTime").val().trim();
    frequencyLocal = $("#trainFrequency").val().trim();

    database.ref().push({
        trainNames: trainNamesLocal,
        trainDestination: trainDestinationLocal,
        firstTrainTime: firstTrainTimeLocal,
        trainFrequency: frequencyLocal
    })

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
})