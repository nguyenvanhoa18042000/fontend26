var n,m,k;
var sum = 0;

do{
	n = parseInt(prompt("Mời bạn nhập số nguyên N"));
	m = parseInt(prompt("Mời bạn nhập số nguyên M"));
	if (n>m) {
		alert("Chú ý : N<=M .Mời bạn nhập lại");
	}
}while(n>m);

k = parseInt(prompt("Mời bạn nhập số nguyên K"));
for(var i=n+1; i<m; i++){
	if (i%k==0) {
		sum+=i;
	}
}
document.write("tổng các số chia hết cho k trong khoảng từ N đến M có giá trị là : "+sum);