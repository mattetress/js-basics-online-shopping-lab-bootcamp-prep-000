var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100 + 1)
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } 
  
  for (let i = 0; i < cart.length; i++) {
    list = []; 
    if (i < cart.length - 1) {
      
    list.push(`${cart[i][itemName]} at $${itemPrice}`);
  let output = `In you cart, you have ${list.join(', ')}`
    } else {
  output += `, and ${cart[i][itemName]} at $${itemPrice}.`;
  
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
