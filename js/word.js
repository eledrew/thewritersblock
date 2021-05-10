function reloadPage(){
  location.reload();
}

function wordSearch(){
  document.getElementById('searchResult').style.visibility ='visible';

  var word = document.getElementById('word');
  var definition = document.getElementById('definition');
  var example = document.getElementById('example');
  var synonym = document.getElementById('synonym');


  var wordToSearch = document.getElementById('searchBox').value;

  var key = "ou55a2f5etvgjmy8iiogq2jc77nxr9kro5r6j1lk2g6rtmyck";

  var request1 = new XMLHttpRequest();
  request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=ou55a2f5etvgjmy8iiogq2jc77nxr9kro5r6j1lk2g6rtmyck', true);
  request1.onload = function(){
    var data = JSON.parse(this.response);
    if(request1.status >= 200 && request1.status < 400){
      var i = Math.ceil(Math.random() * 5);
      word.innerHTML = data[i].word;
      definition.innerHTML = data[i].text;
    } else{
      word.innerHTML = "error";
      definition.innerHTML = "error";
    }
  }
  request1.send();

  // var request1 = new XMLHttpRequest();
  // request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=3&includeRelated=false&useCanonical=false&includeTags=false&api_key=ou55a2f5etvgjmy8iiogq2jc77nxr9kro5r6j1lk2g6rtmyck', true);
  // request1.onload = function(){
  //   var data = JSON.parse(this.response);
  //   if(request1.status >= 200 && request1.status < 400){
  //     var i = Math.ceil(Math.random() * 3);
  //     word.innerHTML = data[i].word;
  //     definition.innerHTML = data[i].text;
  //   } else{
  //     word.innerHTML = "error";
  //     definition.innerHTML = "error";
  //   }
  // }
  // request1.send();


  var request2 = new XMLHttpRequest();
  request2.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/topExample?useCanonical=false&api_key=ou55a2f5etvgjmy8iiogq2jc77nxr9kro5r6j1lk2g6rtmyck', true);
  request2.onload = function(){
    var data2 = JSON.parse(this.response);
    if(request2.status >= 200 && request2.status < 400){
      example.innerHTML = data2.text;
    } else{
      example.innerHTML = "error";
    }
  }
  request2.send();


  var request3 = new XMLHttpRequest();
  request3.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=5&api_key=ou55a2f5etvgjmy8iiogq2jc77nxr9kro5r6j1lk2g6rtmyck', true);
  request3.onload = function(){
    var data3 = JSON.parse(this.response);
    if(request3.status >= 200 && request3.status < 400){
      let syn = JSON.stringify(data3);
      syn = syn.substring(40, syn.length-4);
      let syn1 = syn.replace(/['"]+/g, ' ');

      synonym.innerHTML = syn1;
      

    } else{
      synonym.innerHTML = "error";
    }
  }
  request3.send();
}
