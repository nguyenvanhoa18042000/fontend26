var n;
var sum=0;
do{
	n=prompt("Mời bạn nhập số nguyên dương n ");
	if (n<=0) {
		alert("Bạn phải nhập số nguyên dương n. Mời bạn nhập lại");
	}
}while(n<=0);
var i=1;
do{
	sum+=i;
	i++;
}while(i<=n);
document.write("S = 1 + 2 + 3+ ... + n có giá trị : "+sum);