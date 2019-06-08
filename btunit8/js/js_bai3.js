
var n;
var giaiThua=1;
var sum=0;
do{
	n=prompt("Mời bạn nhập số nguyên dương n");
	if (n<=0) {
		alert("Bạn phải nhập số nguyên dương n. Mời bạn nhập lại");
	}
}while(n<=0);
for(var i=1;i<=n;i++){
	giaiThua*=i;
	sum+=i*(1/(giaiThua));
}
document.write("tổng S = 1 /1! + 2 /2! + ….+ n / n! có giá trị là : "+sum);