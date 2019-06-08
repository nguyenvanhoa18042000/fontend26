var count=0;
for(var i=1 ; i<=100;i++){
	if (i%3==0||i%7==0) {
		count++;
	}
}
document.write("số lượng các số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100 là : "+count);