function compareValues(num1,num2,bool) {
if(bool == true) {
	if(num1 > num2) {
		alert(num1);
	} 
	if(num2 > num1) {
		alert(num2);
	}
   }
if(bool == false) {
    if(num1 < num2) {
		alert(num1);
	} 
	if(num2 < num1) {
		alert(num2);
	}
 }
}
compareValues(10,7,true);// 10;
compareValues(10,7,false);//7;
compareValues(8,17,true);//17;