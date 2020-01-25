//
//  fileSupport.js
//


//  Given the ID of a <select>  element
//  Read file names from files_list.txt and split into a string array
//  Create <option>'s with the strings
//  Append the options to the select element

function appendFileNames(selectID)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			appendNames(xhttp.responseText, selectID);
		}
	}

	// NOTE the path can be ../CardFiles once running on web.
	xhttp.open("GET", "https://gunboatgrey.github.io/FlashCards/CardFiles/file_list.txt", true);

	xhttp.send();
}



function appendNames(str, elementID)
{
	// alert(str);

	var names = str.split("\n");

	for (i = 0; i < names.length; i++) {
		var opt = document.createElement('option');
		opt.value = names[i];
		opt.innerHTML = names[i];
		document.getElementById(elementID).appendChild(opt);
	}
}


//
// Read a file on the server and pass the data to the call back function
//

function readServerFile(callBack, fileName)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			callBack(xhttp.responseText);
		}
	}

	// NOTE the path can be ../CardFiles once running on web.
	path = "https://gunboatgrey.github.io/FlashCards/CardFiles/" + fileName;
	xhttp.open("GET", path, true);

	xhttp.send();
}

