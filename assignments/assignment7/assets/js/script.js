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
        firstTrainTime: moment(moment(firstTrainTimeLocal, "HH:mm")).format("X"), //This is in 24 hr time, converted to Unix
        trainFrequency: frequencyLocal
    })

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
});

database.ref().on("child_added", function(snapshot){
    var sv = snapshot.val();
    var currentTime = moment(new Date(), "hh:mm");
    var minutesUntilTrain = "";

    var getNextTime = function() {
        var timeConverted = moment(sv.firstTrainTime, "X").subtract(1, "years");
        var diffTime = moment(currentTime).diff(moment(timeConverted), "minutes");
        var timeRemainder = diffTime % sv.trainFrequency;
        minutesUntilTrain = sv.trainFrequency - timeRemainder;

        return(moment(currentTime).add(minutesUntilTrain, "minutes"));
    };

    $("#tableBody").append(`
        <tr>
            <td>${sv.trainNames}</td>
            <td>${sv.trainDestination}</td>
            <td>${sv.trainFrequency}</td>
            <td>${moment(getNextTime()).format("hh:mm A")}</td>
            <td>${minutesUntilTrain}</td>
        </tr>
    `)
});