function calcPriceWithDiscount (arrayOfProducts) {
let sum = 0 ;
let sumWithDiscount = 0;
let discount;
let currency = 'PLN';
let result = '';
for (let i = 0; i < arrayOfProducts.length; i++) {
	sum += +arrayOfProducts[i].productPrice * arrayOfProducts[i].numberOfProducts;
if (sum < 1000) {
	discount = 0.03;
}else if(sum >= 1000 && sum < 5000) {
	discount = 0.05;
}else if (sum >= 5000) {
	discount = 0.1;
}
} 
let discountInPercentage = discount * 100;
result += `Your discount is ${discountInPercentage}%\n`;
for (let i = 0; i < arrayOfProducts.length; i++) {
	let productPriceWithDiscount = arrayOfProducts[i].productPrice - arrayOfProducts[i].productPrice * discount;
	let priceForAllItemsWithDiscount = arrayOfProducts[i].numberOfProducts * productPriceWithDiscount;
	let fullProductPrice = arrayOfProducts[i].productPrice * arrayOfProducts[i].numberOfProducts;
	let savedCash = fullProductPrice - priceForAllItemsWithDiscount;
	sumWithDiscount += priceForAllItemsWithDiscount;
	result += `${arrayOfProducts[i].productName}  ${arrayOfProducts[i].productPrice} * ${arrayOfProducts[i].numberOfProducts} = ${fullProductPrice} ${currency}\n and with a discount ${fullProductPrice} - ${savedCash} = ${priceForAllItemsWithDiscount} ${currency}\n`;
 }
 let totalDiscountPrice = sum - sumWithDiscount;
 result += `Total cost of goods ${sum} ${currency},and with a discount ${sumWithDiscount} ${currency}\n Total discount is  ${totalDiscountPrice} ${currency}\n`;
 console.log(result);
}
	
calcPriceWithDiscount([{
productName: 'Bread',
productPrice: 100,
numberOfProducts: 3},
{
productName: 'Sausage',
productPrice: 990,
numberOfProducts: 6}]);
