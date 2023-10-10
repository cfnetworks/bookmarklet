var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
	if (divs[i].id) {
		// output all div ids
		console.log(divs[i].id);
	}
}