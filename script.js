var button = document.getElementById('button');
var text = document.getElementById('item');
var list = document.getElementById('list');

// add user text input to the list
function addToList() {
	// creates a new 'li' element 
	var newItem = document.createElement('li');

	// sets the text of this new 'li' element
	// as the user input
	newItem.innerText = text.value;

	// adds the 'li' element with the user input
	// text to the list
	list.appendChild(newItem);

	// sets the user input text box to empty
	text.value = '';
}

// checks if user input is not empty
function isThereText() {
	if (text.value !== '')
		addToList();
}

// listens to mouse click
button.addEventListener("click", isThereText);

// listens to enter keypress
text.addEventListener("keydown", function (e) {
	if (e.keyCode == 13) {
		isThereText();
	}
});