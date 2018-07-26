function fontsDropdown() {
    document.getElementById("dropdownfonts").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function sizeDropdown() {
    document.getElementById("dropdownsize").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function sizeL() {
document.getElementById("txt").style.fontSize = "30px";
}

function sizeM() {
document.getElementById("txt").style.fontSize = "18px";
}

function sizeS() {
document.getElementById("txt").style.fontSize = "12px";
}

function fontsLato() {
document.getElementById("txt").style.fontFamily = "Lato";
}

function fontsRale() {
document.getElementById("txt").style.fontFamily = "Raleway";
}

function fontsTimes() {
document.getElementById("txt").style.fontFamily = "Times New Roman";
}

function boLd() {

 	if (document.getElementById("txt").style.fontWeight<"750"){
 		document.getElementById("txt").style.fontWeight="750";
 	}else{
 		document.getElementById("txt").style.fontWeight="400"
 	}
}

function itAlic(){
	if (document.getElementById("txt").style.fontStyle!=="italic") {
		document.getElementById("txt").style.fontStyle="italic";
	}else{
		document.getElementById("txt").style.fontStyle="normal";
	}
}

function underLined(){
	if (document.getElementById("txt").style.textDecoration!== "underline") {
		document.getElementById("txt").style.textDecoration="underline";
	}else{
		document.getElementById("txt").style.textDecoration="none";
	}
}
