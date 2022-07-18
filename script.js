var addButton = document.getElementById('button');
var text = document.getElementById('item');
var list = document.getElementById('list');

// add user text input to the list
function addToList() { 
	var div = document.createElement('div');
	var newItem = document.createElement('li');
	var delButton = document.createElement('button');

	div.classList.add('wrapper');
	list.appendChild(div);
	div.append(newItem, delButton);

	// sets the text of this new 'li' element as the user input
	newItem.innerText = text.value;

	// sets the user input text box to empty
	text.value = '';

	delButton.innerHTML = 'Delete';
}

// checks if user input is not empty
function isThereText() {
	if (text.value !== '')
		addToList();
}

function toggleText(e) {
	e.target.classList.toggle('done');

	// also, a very expensive solution :)
	// for (var i = 0; i <= list.children.length - 1; i++)
	// 	if (list.children[i].children[0].innerText == e.target.innerText)
	// 		list.children[i].children[0].classList.toggle('done');
}

function deleteText(e) {
	e.target.parentElement.remove();
}

function handleListClick(element) {
	if (element.target.nodeName == 'LI')
		toggleText(element);
	else if (element.target.nodeName == 'BUTTON')
		deleteText(element);
}

// listens to mouse click
addButton.addEventListener("click", isThereText);

// listens to enter keypress
text.addEventListener("keydown", function (e) {
	if (e.keyCode == 13) {
		isThereText();
	}
});

list.addEventListener("click", handleListClick);



// algorithm is not checking if user input has already been added.