var n;
var sum=0;
do{
	n=prompt("Mời bạn nhập số nguyên dương N");
	if (n<=0) {
		alert("Bạn phải nhập số nguyên dương N . Mời bạn nhập lại");
	}
}while(n<=0);
for(var i=1; i<=n;i++){
	sum+=(1/i);
}
document.write("tổng: S = 1 + 1/2 + 1/3 + … + 1/n có giá trị là : "+sum)