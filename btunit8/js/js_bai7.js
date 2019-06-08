// hình 1
function img1(){
	var numberh1=1;
	while(numberh1<=7){
		for( var i=1;i<=numberh1;i++){
		document.write("* ");
		}
	document.write("<br>");
	numberh1++;
	}
}
var m=7;
var n=7;
// hình 2
function img2(){
	for(var i=0;i<m;i++){
		for(var j=0;j<n;j++){
		document.write("* ");
		}
	document.write("* "+"<br>");
	}
}

// hình 3
function img3(){
	for(var i=0;i<m;i++){
		for(var j=0;j<n;j++){
			if (i==0 || j==0 || i==6 || j==6) {
			document.write("* ");
			}else{
			document.write("&nbsp;&nbsp;&nbsp;");
			}
		}
	document.write("<br>");
	}
}
// hình4
function img4(){
	var numberh4=7;
	while(numberh4>=1){
		for( var i=1;i<=numberh4;i++){
		document.write("* ");
		}
	document.write("<br>");
	numberh4--;
	}
}
img1();
document.write("<br>");
img2();
document.write("<br>");
img3();
document.write("<br>");
img4();


