function checkCardSystem (cardNumber) {
      let numberofCard = [];
      for(let i = )
      numberofCard.length
   console.log(String(cardNumber).length);
   let stringFromNumber = String(cardNumber);
   if( stringFromNumber.length == 15 && stringFromNumber.charAt(0) == 3 && (stringFromNumber.charAt(1) == 4 || stringFromNumber.charAt(1) == 7)) {
      console.log('AMEX');
   }else if(stringFromNumber.length == 13 || stringFromNumber.length == 16 && stringFromNumber.charAt(0) == 4) {
   	console.log('VISA')
   }else if(stringFromNumber.length ==16 && stringFromNumber.charAt(0) == 5 && (stringFromNumber.charAt(1) == 1 || stringFromNumber.charAt(1) == 2 || stringFromNumber.charAt(1) == 3 || stringFromNumber.charAt(1) == 4 || stringFromNumber.charAt(1) == 5)) {
   	console.log('MASTERCARD');
   }else{
   	console.log('INVALID');
   }
   let reverseArray = [];
   for(let i = stringFromNumber.length - 1; i >= 0; i--) {
   	reverseArray.push(stringFromNumber[i]);
   } 
   console.log(reverseArray);
   let modifiedArray = [];
   for (let i = 0; i < reverseArray.length; i++) {
   	if ( i % 2 == 0) {
   		modifiedArray.push(reverseArray[i]);
   	}else if ( i % 2 != 0) {
   		if (reverseArray[i] * 2 > 9) {
   			let num = (reverseArray[i] * 2) - 9; 
   			modifiedArray.push(num);
   		}else {
          modifiedArray.push(reverseArray[i] * 2);
   		}
   	}
   }let sum = 0;
   for (let i = 0; i < reverseArray[i].length;i++) {
   	sum += reverseArray[i].length;
   }
   console.log(sum);
   console.log(modifiedArray);
    }
   checkCardSystem(378282246310005);
   checkCardSystem(4012888888881881);
   checkCardSystem(5105105105105100);
   checkCardSystem(1111111111111111);