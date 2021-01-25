// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//    apiKey: "AIzaSyCMjU32FgagalUFdkR-xI1eAdIR-ktPohA",
//    authDomain: "news-app-fafd2.firebaseapp.com",
//    databaseURL: "https://news-app-fafd2.firebaseio.com",
//    projectId: "news-app-fafd2",
//    storageBucket: "news-app-fafd2.appspot.com",
//    messagingSenderId: "925549128221",
//    appId: "1:925549128221:web:2c0f3d3b5419a31282f4f4",
//    measurementId: "G-LYBKPMWD6J"
//  };
//  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//  // firebase.analytics();
//
//  // Basketball Data Collection in Firebase:
// var basketballData = firebase.database().ref("Offensive_Stints");

var t = $('#stint-table').DataTable();
var counter = 1;
var index = 1;

$('#submit').on('click', function(e) {
    e.preventDefault();
    var date = $(".add-date").val();
    var p1 = $(".add-pg").val();
    var p2 = $(".add-sg").val();
    var p3 = $(".add-sf").val();
    var p4 = $(".add-pf").val();
    var p5 = $(".add-c").val();
    // var opponent = $(".add-opponent").val();
    // var rank = $(".add-rank").val();
    var arena = $(".add-arena").val();

    var type = $(".add-type").val();
    var start = $(".add-flow-start").val();
    var play_type = $(".add-shot-play-type").val();
    var passes = $(".add-passes").val();
    var movement = $(".add-movement").val();
    var shot_selection = $(".add-shot-selection").val();
    var location = $(".add-location").val();
    var shot_result = $(".add-shot-result").val();
    var points = $(".add-points").val();
    var player = $(".add-player").val();
    t.row.add([
        date,
        p1,
        p2,
        p3,
        p4,
        p5,
        // opponent,
        // rank,
        arena,
        type,
        index,
        start,
        play_type,
        passes,
        movement,
        shot_selection,
        location,
        shot_result,
        points,
        player
    ]).draw(false);
    index = index + 1;
    counter++;
    // Save the data to firebase:
    // saveData(date,opponent,index,start,play_type,passes,movement,shot_selection,shot_result,points,player);
});

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Make sure that the link is not displayed
    downloadLink.style.display = "none";
    // Add the link to your DOM
    document.body.appendChild(downloadLink);
    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);
		csv.push(row.join(","));
	}
    // Download CSV
    download_csv(csv.join("\n"), filename);
}


document.querySelector(".myclass").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "PBP_Stats.csv");
});


// Save data to firebase:
// function saveData (date,opponent,index,start,play_type,passes,movement,shot_selection,shot_result,points,player){
//   var newDataRef = basketballData.push();
//   newDataRef.set({
//     date: date,
//     opponent:opponent,
//     index: index,
//     start: start,
//     play_type:play_type,
//     passes:passes,
//     movement:movement,
//     shot_selection:shot_selection,
//     shot_result:shot_result,
//     points:points,
//     player:player
//   })
// }
//
// var data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
// var labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//
// function renderChart(data, labels) {
//     var ctx = document.getElementById("myChart").getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'This week',
//                 data: data,
//             }]
//         },
//     });
// }
// renderChart(data,labels);


// Automatically add a first row of data
// $('#submit').trigger('click');
