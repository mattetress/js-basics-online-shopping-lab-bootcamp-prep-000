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
    let list = []; 
    let output = "";
    if (i < cart.length - 1) {
      
    list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
   output += `In you cart, you have ${list.join(', ')}`
    } else {
  output = `In you cart, you have ${list.join(', ')}, and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  return output;
  }
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
