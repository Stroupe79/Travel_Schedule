
 // Initialize Firebase

 $(document).ready(function (){


 const config = {
    apiKey: "AIzaSyDBdToZozb2IWnhgukxR-HbYONqRhfz0gc",
    authDomain: "transportation-schedule-60bd4.firebaseapp.com",
    databaseURL: "https://transportation-schedule-60bd4.firebaseio.com",
    projectId: "transportation-schedule-60bd4",
    storageBucket: "transportation-schedule-60bd4.appspot.com",
    messagingSenderId: "133777690038"
};
firebase.initializeApp(config);

const database = firebase.database();


$("#submit").on("click", function(event) {
    event.preventDefault();
    let dropdown = $("option:selected").val();
    let dest = $("#dest").val();
    let depart = $("#firstDep").val();
    let freq = $("#freqDep").val();
    let name = $("#name").val();
    let time = moment(depart).format("HH:mm")
    
    let dbAdd = {
        name: name,
        mode: dropdown,
        dest: dest,
        time: time,
        frequency: freq,
    }

    database.ref().push(dbAdd)
    tableAdd(dbAdd);
    });

function tableAdd(data){
    console.log(data)
    let newArrive = timeMath();
var newRow = $("<tr>").append(
    $("<td id='data'>").html("<img src='./assets/icons/" + data.mode + ".png'/> - " + data.name),
    $("<td id='data'>").text(data.dest),
    $("<td id='data'>").text(data.time),
    $("<td id='data'>").text(data.frequency),
    $("<td id='data'>").text(newArrive),
);


$("#newData").append(newRow);
clearFields();
}


function timeMath(){
 var now = moment();
 arrival = moment(now._d).add($("#freqDep").val(), 'hours');
 let newArr = moment(arrival).format("HH:mm");
 console.log(now._d);
 console.log(arrival._d);
 console.log(newArr)
 return newArr;
};

function clearFields(){
    $("#dest").attr("val", "");
}

});