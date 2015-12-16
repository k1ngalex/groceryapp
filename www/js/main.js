var itemnum = localStorage.length ;
$(document).ready(function() {
	console.log("local storage good");
	for (i = 0; i < localStorage.length + 10 ; i++) {
		if (localStorage.getItem(i) === null) {
			console.log("skipped");
			} else {
			$("#list").append("Item"+ " " + i + '<li>' + '<input type="checkbox" onClick="savecheck()" id="box' + i + '">' + localStorage.getItem(i) + '</li>');
		}
	}
});

function save() {
	
	localStorage.setItem(itemnum  , (document.getElementById("input").value));
	console.log("saved");
	$("#list").append("Item"+ " " + (itemnum) + '<li> <input type="checkbox" onClick="savecheck()" id="box' + i + '>' + localStorage.length + 1 + '">' + (document.getElementById("input").value) + '</li>');
	$('#input').val('');
	itemnum++;
	
	location.reload();

}

function Delete() {
	swal.showInputError("You need to write something!");
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
		
		localStorage.removeItem(inputValue);
		location.reload();
	});
}

 
//localstoage same key 
//store all as array , single item
//2d array.