function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin", "pesto", ["mozzarella", "parmesean"], ["green peppers", "olives", "basil"]);
console.log(p3);

var p4 = pizzaOven("hand tossed", "garlic white sauce", ["mozzarella", "ricotta", "parmesean"], ["italian sausage", "pepperoni", "onion"]);
console.log(p4)