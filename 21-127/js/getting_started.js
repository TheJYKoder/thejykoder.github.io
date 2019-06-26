function alterArrows(i) {
	var list = [document.getElementById("link1"), document.getElementById("link2"), document.getElementById("link3")];
	if(i === 0) {
		if(link1.classList.contains("active")) {
			document.getElementById("arrow1").innerHTML = "&#9654";
		}
		else {
			document.getElementById("arrow1").innerHTML = "&#x25BC";
			document.getElementById("arrow2").innerHTML = "&#9654";
			document.getElementById("arrow3").innerHTML = "&#9654";
		}
	}
	else if(i === 1) {
		if(link2.classList.contains("active")) {
			document.getElementById("arrow2").innerHTML = "&#9654";
		}
		else {
			document.getElementById("arrow2").innerHTML = "&#x25BC";
			document.getElementById("arrow1").innerHTML = "&#9654";
			document.getElementById("arrow3").innerHTML = "&#9654";
		}
	}
	else {
		if(link3.classList.contains("active")) {
			document.getElementById("arrow3").innerHTML = "&#9654";
		}
		else {
			document.getElementById("arrow3").innerHTML = "&#x25BC";
			document.getElementById("arrow1").innerHTML = "&#9654";
			document.getElementById("arrow2").innerHTML = "&#9654";
		}
	}
}


