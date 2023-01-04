// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function(){
// 	console.log("CLICK!!!");
// 

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//this code cab be made simpler as shown in section2
// button.addEventListener("click", function(){
// 	// console.log("click is working!!!");
// 	if (input.value.length > 0){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value="";
// 	}
	
// })

// input.addEventListener("keypress", function(event){
// 	// console.log(event);
// 	if (input.value.length > 0 && event.code === "Enter"){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value="";
// 	}
	
// })

//section2 - simpler code

function inputLength(){
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}
function addListAfterKeyPress(event){
	if (inputLength() > 0 && event.code === "Enter"){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);