// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
  const menuOptions = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ];
  const order = [];
  let remainingOrder = input;
  let index = 0;
  //   Iterate through each item on the menu
  for (const option of menuOptions) {
    // While I found the item last time
    while (index >= 0) {
      // Is the item in there?
      index = remainingOrder.search(option.toLowerCase());
      // It is? Remove it from the string and add it to the array
      if (index >= 0) {
        remainingOrder = remainingOrder.replace(option.toLowerCase(), '');
        order.push(option);
      }
    }
    index = 0;
  }

  return order.join(' ');
}

const order1 =
  'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza';
// Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke

const order2 = 'pizzachickenfriesburgercokemilkshakefriessandwich';
// Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke
const ans = getOrder(order1);
console.log(ans);

//   This keeps them in the order they are in the order.
//   //   While there is more of the order left
//   while (remainingOrder) {
//     // Iterate through the possible choices
//     for (const option of menuOptions) {
//       // Does the remaining order start with it? If so, add it to the list and slice it off.
//       if (remainingOrder.search(option.toLowerCase()) === 0) {
//         order.push(option);
//         remainingOrder = remainingOrder.slice(option.length);
//       }
//     }
//   }
