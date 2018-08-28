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
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    let list = []
    for (let i = 0; i < cart.length - 1; i++) {
      list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);

    }
    return `In your cart, you have ${list.join(', ')}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  }
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart.hasOwnProperty(itemName) && cart[i].itemName === item) {
      cart.splice(i, i + 1);
      return cart;
    } 
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
