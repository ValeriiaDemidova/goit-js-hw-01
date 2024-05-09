function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = pricePerDroid * quantity;
    return `You order ${quantity} droids worth ${totalPrice} creadits!`
}
console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 
