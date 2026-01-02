let cart = {};
let totalPrice = 0;

function addToCart(item, price) {
  if (cart[item]) {
    cart[item].qty++;
  } else {
    cart[item] = { price: price, qty: 1 };
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  totalPrice = 0;
  let count = 0;

  for (let item in cart) {
    let itemTotal = cart[item].price * cart[item].qty;
    totalPrice += itemTotal;
    count += cart[item].qty;

    cartItems.innerHTML += `
      <tr>
        <td>${item}</td>
        <td>${cart[item].price}</td>
        <td>${cart[item].qty}</td>
        <td>${itemTotal}</td>
      </tr>
    `;
  }

  totalPriceEl.innerText = totalPrice;
  cartCount.innerText = count;
}
