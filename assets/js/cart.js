// Define the cart array
let cart = [];
let price = 0;

// Add item to cart
function addItemToCart(item) {
	// Code to add item to cart
	cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log("CART:" , cart)

}

function addPrice(cost) {
  price = price += cost
  sessionStorage.setItem("price", JSON.stringify(price));
}

// Remove item from cart
function removeItemFromCart(item) {
	// Code to remove item from cart
	const index = cart.indexOf(item);
	if (index !== -1) {
		cart.splice(index, 1);
	}
}

// Buy now - clear cart
function erase() {
    cart = [];
    price = 0;
    sessionStorage.removeItem("cart");
    sessionStorage.removeItem("price");
}

// Get cart
function getCart() {
    let storedCart = sessionStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return [];
  }
}

function getCost(){
    let storedPrice = sessionStorage.getItem("price");
    if (storedPrice) {
      return storedPrice
      } else {
      return null;
    }
}