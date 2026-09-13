document.addEventListener("DOMContentLoaded", function () {

  const phoneNumber = "918431905840";

  let cart =
    JSON.parse(localStorage.getItem("dhaaraCart")) || [];


  const cartItems =
    document.getElementById("cart-items");

  const cartSummary =
    document.getElementById("cart-summary");

  const cartCount =
    document.getElementById("cart-count");


  // DISPLAY CART

  function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

      cartItems.innerHTML = `
        <div class="empty-cart">
          <p>Your cart is empty 🛒</p>

          <a href="index.html"
             class="hero-button">
             Continue Shopping
          </a>
        </div>
      `;

      cartSummary.innerHTML = "";

      updateCount();

      return;
    }


    cart.forEach((item, index) => {

      const cartItem =
        document.createElement("div");

      cartItem.className = "cart-item";


      cartItem.innerHTML = `

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="cart-item-details">

          <h3>${item.name}</h3>

          <p>
            ₹${item.price}
          </p>

          <div class="quantity-controls">

            <button
              onclick="decreaseQuantity(${index})">
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="increaseQuantity(${index})">
              +
            </button>

          </div>

        </div>


        <div>

          <p>
            <strong>
              ₹${item.price * item.quantity}
            </strong>
          </p>

          <button
            class="remove-btn"
            onclick="removeItem(${index})">

            Remove

          </button>

        </div>

      `;


      cartItems.appendChild(cartItem);

    });


    displaySummary();

    updateCount();

  }


  // SUMMARY

  function displaySummary() {

    let total = 0;

    let totalItems = 0;


    cart.forEach(item => {

      total += item.price * item.quantity;

      totalItems += item.quantity;

    });


    cartSummary.innerHTML = `

      <div class="cart-summary">

        <div class="cart-total">

          Total Items:
          ${totalItems}

          <br><br>

          Total:
          ₹${total}

        </div>


        <button
          class="whatsapp-cart-btn"
          onclick="orderCartOnWhatsApp()">

          Order Cart on WhatsApp

        </button>


        <button
          class="clear-cart-btn"
          onclick="clearCart()">

          Clear Cart

        </button>

      </div>

    `;

  }


  // UPDATE CART COUNT

  function updateCount() {

    const total =
      cart.reduce(
        (sum, item) =>
          sum + item.quantity,
        0
      );

    cartCount.textContent = total;

  }


  // SAVE CART

  function saveCart() {

    localStorage.setItem(
      "dhaaraCart",
      JSON.stringify(cart)
    );

  }


  // INCREASE

  window.increaseQuantity = function (index) {

    cart[index].quantity++;

    saveCart();

    displayCart();

  };


  // DECREASE

  window.decreaseQuantity = function (index) {

    if (cart[index].quantity > 1) {

      cart[index].quantity--;

    } else {

      cart.splice(index, 1);

    }

    saveCart();

    displayCart();

  };


  // REMOVE

  window.removeItem = function (index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

  };


  // CLEAR CART

  window.clearCart = function () {

    if (cart.length === 0) return;


    if (confirm("Are you sure you want to clear your cart?")) {

      cart = [];

      saveCart();

      displayCart();

    }

  };


  // WHATSAPP ORDER

  window.orderCartOnWhatsApp = function () {

    if (cart.length === 0) {

      alert("Your cart is empty.");

      return;

    }


    let message =
      "Hello StyleWithDhaara!%0A%0A" +
      "I want to order:%0A%0A";


    let total = 0;


    cart.forEach(item => {

      const itemTotal =
        item.price * item.quantity;

      total += itemTotal;


      message +=
        `${item.name} - ` +
        `₹${item.price} x ${item.quantity} ` +
        `= ₹${itemTotal}%0A`;

    });


    message +=
      `%0ATotal: ₹${total}`;


    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );

  };


  // START

  displayCart();

});