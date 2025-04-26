/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, 
and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. 
Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
*/

function fuelCalculator(litres, pricePerLitre) {
    let discount = 0;
    if (litres >= 2 && litres < 4) {
        discount = 0.05;
    } else if (litres >= 4 && litres < 6) {
        discount = 0.10;
    } else if (litres >= 6 && litres < 8) {
        discount = 0.15;
    } else if (litres >= 8 && litres < 10) {
        discount = 0.20;
    } else if (litres >= 10) {
        discount = 0.25;
    }
    
    const totalCost = litres * (pricePerLitre - discount);
    return parseFloat(totalCost.toFixed(2));
}

console.log(fuelCalculator(10, 1.23)); 
console.log(fuelCalculator(5, 1.23));