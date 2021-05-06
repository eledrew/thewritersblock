displayWritings();
var saveButton = document.getElementById('saveButton');

//event listener adds user input into local storage
saveButton.addEventListener('click',function(){

	let writingObj;
	let saveWriting = document.getElementById('saveWriting');
	let writingString = localStorage.getItem('writings');

	if(writingString == null){
		writingObj = [];
	}
	else{
		writingObj = JSON.parse(writingString);
	}

	//adds date
	let now = new Date();
	let dateTime = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;

	//pushes into local storage
	let tempObj = { text: saveWriting.value, time: dateTime };

	writingObj.push(tempObj);
	localStorage.setItem('writings',JSON.stringify(writingObj));

	saveWriting.value = '';

	displayWritings();
});

// displays data stored in the local storage
function displayWritings(){
	let writingObj;
	let writingString = localStorage.getItem('writings');

	if(writingString == null){
		writingObj = [];
	}
	else{
		writingObj = JSON.parse(writingString);
	}

	let html = '';

	writingObj.forEach(function(element,index){
		html += `
				<div class="card">
					<div class="card-body">
						<h6>${element.time}</h6>
						<p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
						<button id="${index}" onclick=deleteWriting(this.id) class="button">delete</button>
					</div>
				</div>
			`;
	});

	let writingElement = document.getElementById('writings');

	if(writingObj.length != 0){
		writingElement.innerHTML = html;
	}
	else{
		writingElement.innerHTML = '<h3>no writings saved</h3>';
	}

}


//deletes a note
function deleteWriting(index){
	let writingObj;
	let writingString = localStorage.getItem('writings');

	if(writingString == null){
		writingObj = [];
	}
	else{
		writingObj = JSON.parse(writingString);
	}

	writingObj.splice(index,1);
	localStorage.setItem('writings',JSON.stringify(writingObj));

	displayWritings();
}
