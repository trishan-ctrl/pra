document.addEventListener("DOMContentLoaded", function () {
console.log("Script loaded");
  const phoneNumber = "918431905840";

  // PRODUCTS
  const products = [
    {
      name: "Midnight floral top",
      price: 649,
      image: "image/top2.jpeg"
    },
    {
      name: "Lilac Floral Tie-Up Kurta Set",
      price: 649,
      image: "image/top4.jpeg"
    },
    {
      name: "Royal Plum Motif Kurta Set",
      price: 699,
      image: "image/top7.jpeg"
    },
    {
      name: "Olive Paisley Kurta Set",
      price: 649,
      image: "image/top10.jpeg"
    },
    {
      name: "Red Polka Dot Kurta Set",
      price: 649,
      image: "image/top12.jpeg"
    },
    {
      name: "Indigo Elegance Kurta Set",
      price: 899,
      image: "image/top13.jpeg"
    },
    {
      name: "Emerald Bloom Kurta Set",
      price: 799,
      image: "image/top14.jpeg"
    },
    {
      name: "Maroon printed kurta set",
      price: 649,
      image: "image/top15.jpeg"
    },
    {
      name: "Pink floral kurta set",
      price: 879,
      image: "image/top16.jpeg"
    },
    {
      name: "Teal printed kurta set",
      price: 699,
      image: "image/top17.jpeg"
    },
    {
      name: "Coral Printed kurta set",
      price: 749,
      image: "image/top18.jpeg"
    },
    {
      name: "Purple printed kurta set",
      price: 649,
      image: "image/top19.jpeg"
    },
    {
      name: "Navy floral kurta set",
      price: 649,
      image: "image/top20.jpeg"
    },
      {
      name: "Teal printed kurta set",
      price: 700,
      image: "image/top21.jpeg"
    },
     {
      name: "Yellow floral sleeveless set",
      price: 700,
      image: "image/top22.jpeg"
    },
     {
      name: "Olive green printed suit",
      price: 900,
      image: "image/top23.jpeg"
    },
     {
      name: "Purple gold embroidered kurta set",
      price: 900,
      image: "image/top24.jpeg"
    },
     {
      name: "Rust floral kurta set",
      price: 700,
      image: "image/top25.jpeg"
    },
     {
      name: "Grey striped kurta set",
      price: 600,
      image: "image/top26.jpeg"
    },
     {
      name: "Red Anarkali set",
      price: 800,
      image: "image/top27.jpeg"
    },
     {
      name: "Navy blue Anarkali set",
      price: 800,
      image: "image/top28.jpeg"
    },
    {
      name: "Ivory sleeveless kurta set",
      price: 700,
      image: "image/top29.jpeg"
    }, 
    {
      name: "Navy elegance kurta set",
      price: 800,
      image: "image/top30.jpeg"
    }, 
    {
      name: "Midnight bloom short kurti",
      price: 450,
      image: "image/top31.jpeg"
    }, 
    {
      name: "Noir Muse short kurti",
      price: 450,
      image: "image/top32.jpeg"
    },
     {
      name: "Mocha Charm short kurti",
      price: 500,
      image: "image/top33.jpeg"
    },
     {
      name: "Blush petal short kurti",
      price: 450,
      image: "image/top34.jpeg"
    },
        {
      name: "Indigo Bloom short kurti",
      price: 600,
      image: "image/top35.jpeg"
    }
    
  ];


  // PRODUCT CONTAINER
  const container = document.getElementById("products");


  // DISPLAY PRODUCTS
  if (container) {

    products.forEach((p, index) => {

      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">

        <h3>${p.name}</h3>

        <p>₹${p.price}</p>

        <div class="product-buttons">

          <button class="cart-btn" data-index="${index}">
            🛒 Add to Cart
          </button>

          <button class="order-btn" data-index="${index}">
            Order on WhatsApp
          </button>

        </div>
      `;

      container.appendChild(card);
    });


    // ADD TO CART BUTTON
    document.querySelectorAll(".cart-btn").forEach(button => {

      button.addEventListener("click", function () {

        const index = this.dataset.index;

        addToCart(products[index]);

      });

    });


    // WHATSAPP BUTTON
    document.querySelectorAll(".order-btn").forEach(button => {

      button.addEventListener("click", function () {

        const index = this.dataset.index;

        const product = products[index];

        const message =
          `Hi, I want to order: ${product.name}%0APrice: ₹${product.price}`;

        window.open(
          `https://wa.me/${phoneNumber}?text=${message}`,
          "_blank"
        );

      });

    });

  }


  // ADD PRODUCT TO CART
  function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("dhaaraCart")) || [];

    const existingProduct = cart.find(
      item => item.name === product.name
    );

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });

    }

    localStorage.setItem("dhaaraCart", JSON.stringify(cart));

    updateCartCount();

    alert(`${product.name} added to cart 🛒`);

  }


  // UPDATE CART COUNT
  function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const cart =
      JSON.parse(localStorage.getItem("dhaaraCart")) || [];

    const totalItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    cartCount.textContent = totalItems;

  }


  // MOBILE MENU
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

  }


  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      const name =
        document.getElementById("name").value;

      const contact =
        document.getElementById("contact").value;

      const subject =
        document.getElementById("subject").value;

      const message =
        document.getElementById("message").value;


      if (!name || !contact || !message) {

        alert("Please fill all required fields.");

        return;

      }


      const whatsappMessage =
        `Hello StyleWithDhaara!%0A%0A` +
        `Name: ${name}%0A` +
        `Contact: ${contact}%0A` +
        `Subject: ${subject}%0A` +
        `Message: ${message}`;


      window.open(
        `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
        "_blank"
      );


      contactForm.reset();

    });

  }


  // INITIAL CART COUNT
  updateCartCount();

});


// HERO BUTTON
function scrollToProducts() {

  const products =
    document.getElementById("products");

  if (products) {

    products.scrollIntoView({
      behavior: "smooth"
    });

  }

}

function searchProducts() {
    const input = document.getElementById("productSearch");
    const searchText = input.value.toLowerCase().trim();

    const products = document.querySelectorAll("#products > *");

    products.forEach(function (product) {
        const productName = product.textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
