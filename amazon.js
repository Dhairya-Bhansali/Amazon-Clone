let cart = {};
let cartCount = 0;

function addToCart(item, price) {
  if (cart[item]) {
    cart[item].quantity++;
  } else {
    cart[item] = { price: price, quantity: 1 };
  }

  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  for (let item in cart) {
    let itemTotal = cart[item].price * cart[item].quantity;
    totalPrice += itemTotal;

    cartItems.innerHTML += `
      <tr>
        <td>${item}</td>
        <td>${cart[item].price}</td>
        <td>${cart[item].quantity}</td>
        <td>${itemTotal}</td>
      </tr>
    `;
  }

  document.getElementById("total-price").innerText = totalPrice;
}
