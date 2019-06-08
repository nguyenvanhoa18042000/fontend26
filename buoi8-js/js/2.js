function ClickEvent(){
  alert('Zent Group - Xin chào các bạn');
}
function diChuotVao(x){
	x.style.width="200px";
	x.style.height="200px";
	var text= document.getElementById('text');
	text.style.color="red";

}
function diChuotRa(x){
	x.style.width="100px";
	x.style.height="100px";
	var text= document.getElementById('text');
	text.style.color="black";	
}
// var text= document.getElementsByClass('text'); nếu là class thì thêm s va Class
//  và nếu text.style.color="black"; thì chuyển thành text[0].style.color="black";