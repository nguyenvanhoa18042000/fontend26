var slideIndex=1;
showImage(slideIndex);
function directional(n){
	showImage(slideIndex+=n);
}
function current(n){
	showImage(slideIndex=n);
}

var slide = 0;
autoplay();
function autoplay() {
  var autoslide = document.getElementsByClassName("slide");
  for (var i = 0; i < autoslide.length; i++) {
    autoslide[i].style.display = "none";  
  }
  slide++;
  if (slide > autoslide.length) {slide = 1}    
  autoslide[slide-1].style.display = "block"; 
  current(slide); 
  setTimeout(autoplay, 2000);    
}
function showImage(n){
	var slides = document.getElementsByClassName('slide');
	var currents = document.getElementsByClassName('edit-current');
	if (n>slides.length) {
		slideIndex=1;
	}
	if (n<1) {
		slideIndex=slides.length;
	}
	for(var i=0; i<slides.length;i++){
		slides[i].style.display="none";
		currents[i].className = currents[i].className.replace(" preen","");
	}
 	slides[slideIndex-1].style.display="block";
 	currents[slideIndex-1].className +=" preen";
}