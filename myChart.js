// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // var firebaseConfig = {
 //   apiKey: "AIzaSyCMjU32FgagalUFdkR-xI1eAdIR-ktPohA",
 //   authDomain: "news-app-fafd2.firebaseapp.com",
 //   databaseURL: "https://news-app-fafd2.firebaseio.com",
 //   projectId: "news-app-fafd2",
 //   storageBucket: "news-app-fafd2.appspot.com",
 //   messagingSenderId: "925549128221",
 //   appId: "1:925549128221:web:2c0f3d3b5419a31282f4f4",
 //   measurementId: "G-LYBKPMWD6J"
 // };
 // // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);
 // firebase.analytics();


 // Basketball Data Collection in Firebase:
 // var basketballData = firebase.database().ref("Offensive_Stints");

var data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
var labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
                backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)'
       ]
            }]
        },
    });
}

function renderChart2(data, labels) {
    var ctx = document.getElementById("myChart_2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
            }]
        },
    });
}

renderChart(data,labels);
renderChart2(data, labels);





// $("#renderBtn").click(
//     function () {
//         data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
//         labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//         renderChart(data, labels);
//     }
// );


// var ref = firebase.database().ref();
//
// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
