var itemnum = localStorage.length;
$(document).ready(function() {
	console.log("local storage good");
	for (i = 0; i < localStorage.length; i++) {
		if (localStorage.getItem("food" + i) === null) {
			console.log("skipped");
			} else {
			$("#list").append(i + '<li>' + '<input type="checkbox" onClick="savecheck()" id="box' + i + '">' + localStorage.getItem("food" + i) + '</li>');
		}
	}
});

function save() {
	localStorage.setItem("food" + itemnum, (document.getElementById("input").value));
	console.log("saved");
	$("#list").append(itemnum + '<li> <input type="checkbox" onClick="savecheck()" id="box' + i + '>' + localStorage.length + '">' + (document.getElementById("input").value) + '</li>');
	$('#input').val('');
	itemnum++;
}

function savecheck() {
	localStorage.setItem("check" + i, (document.getElementById("box" + i).value));
	6console.log("save check");
}

function Delete() {
	swal({
		title: "Delete",
		text: "Enter The Item Numer to Delete It:",
		type: "input",
		showCancelButton: true,
		closeOnConfirm: false,
		animation: "slide-from-top",
		inputPlaceholder: "Item Number"
	}, function(inputValue) {
		if (inputValue === false) return false;
		if (inputValue === "") {
			swal.showInputError("You need to write something!");
			return false
		}
		localStorage.removeItem("food" + inputValue);
		location.reload();
	});
}


//localstoage same key 
//store all as array , single item
//2d array.