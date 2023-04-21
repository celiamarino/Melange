// Define the cart array
let cart = [];

// Add item to cart
function addItemToCart(item) {
	// Code to add item to cart
	cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log("CART:" , cart)

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
    sessionStorage.removeItem("cart");
    console.log("After erase:" , cart)

}

// Get cart
function getCart() {
    console.log("The Cart:" , cart)
    let storedCart = sessionStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return [];
  }
}