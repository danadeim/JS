function giveMoney (rest) {
	let cointsArray = [50,25,10,5,1];
	let numberOfCoints = 0;
	rest *= 100;
	for (let i= 0; i <= cointsArray.length - 1; i++) {
		if (rest >= cointsArray[i]) {
    		numberOfCoints += (rest - rest % cointsArray[i]) / cointsArray[i];
     		rest %= cointsArray[i];
		}
	}
	console.log(numberOfCoints);
}
giveMoney(1.39);
giveMoney(2.17);