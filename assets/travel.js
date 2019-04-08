
 // Initialize Firebase

 $(document).ready(function (){


 var config = {
    apiKey: "AIzaSyDBdToZozb2IWnhgukxR-HbYONqRhfz0gc",
    authDomain: "transportation-schedule-60bd4.firebaseapp.com",
    databaseURL: "https://transportation-schedule-60bd4.firebaseio.com",
    projectId: "transportation-schedule-60bd4",
    storageBucket: "transportation-schedule-60bd4.appspot.com",
    messagingSenderId: "133777690038"
};
firebase.initializeApp(config);

var database = firebase.database();

const transport = ["Airship", "Bus", "Airplane", "Helicopter", "Submarine", "Ship"]

$("#submit").on("click", function(event) {
    event.preventDefault();
    var dropdown = $("option:selected").val();
    var dest = $("#dest").val();
    var depart = $("#firstDep").val();
    var freq = $("#freqDep").val()
    
    let dbAdd = {
        mode: dropdown,
        dest: dest,
        time: depart,
        frequency: freq,
    }

    database.ref().push(dbAdd)
    tableAdd(dbAdd);
    });

function tableAdd(data){
    console.log(data)
var newRow = $("<tr>").append(
    $("<td id='data'>").html("<img src='./assets/icons/" + data.mode + ".png'/> - " + data.mode),
    $("<td id='data'>").text(data.dest),
    $("<td id='data'>").text(data.time),
    $("<td id='data'>").text(data.frequency),
    $("<td id='data'>").text(data.arrival),
);

$("#newData").append(newRow);


// data.dest
// data.time
// data.frequency

//     $("#newData").html("<tr><td id='data'>" + data.mode + "</td><td id='data'>" + data.dest + "</td><td id='data'>" + data.time + "</td><td id='data'>" + data.frequency + "</td></tr>");
}

function drawRows(){
    tableAdd(dbAdd);

}

});