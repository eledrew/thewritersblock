// var xmlhttp = new XMLHttpRequest();
//
// xmlhttp.open("GET","../assets/prompts.json",true);
// xmlhttp.send();
//
// request.onload = function(){
//   var data = JSON.parse(this.response);
//   console.log(data);
//
// var button = document.getElementById("my-button");
//
//
// button.addEventListener("click", function()) {
//   input.value = names[Math.floor(Math.random() * names.length)];
// }
//




// const path = "../assets.prompts.json";
//
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','../assets/prompts.json',  true);
//   xhr.onload = function(e){
//     if (this.status == 200){
//       var file = new File ([this.response], 'temp');
//       var fileReader = new FileReader();
//       fileReader.addEventListener('load', function(){
//         var data = JSON.parse(this.response);
//         console.log(data);
//       });
//
//       fileReader.readAsText(file);
//     }
//   }
//   xhr.send();


var mainContainer = document.getElementById("myData");
var div = document.createElement("div");

var button = document.getElementById("my-button");
button.addEventListener("click", function() {
  let requestURL = 'https://eledrew.github.io/writingprompts/prompts.json';

  let request = new XMLHttpRequest();

  request.open('GET', requestURL, true);
  request.responseType = 'json';
  request.send();
  request.onload = function(){
    var prompts = this.response;
    console.log(prompts);
    const randIndex = Math.floor(Math.random() * prompts.length);
    console.log(randIndex);
    const randPrompt = prompts[randIndex];
    console.log(randPrompt);
    let myJSON = JSON.stringify(randPrompt);
    myJSON = myJSON.substring(12, myJSON.length - 2);
    document.getElementById("demo").innerHTML = myJSON;


  }

});
