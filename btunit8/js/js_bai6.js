var sum=0;
var count=0;
for(var i=0; i<100;i+=2){
	sum+=i;
	count++;
	if (count==10) {
		document.write("tổng của 10 số chẵn đầu tiên có giá trị là : "+sum);
		break;
	}
}