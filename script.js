document.addEventListener("DOMContentLoaded", function () {

  const phoneNumber = "+918431905840"; 

  const products = [
    {
      name: "Teal bloom kurta set",
      price: 649,
      image: "image/top1.jpeg"
    },
    {
      name: "Midnight floral top",
      price: 649,
      image: "image/top2.jpeg"
    },
   {
      name: "Rose Garden Kurta Set",
      price: 799,
      image: "image/top3.jpeg"
    },
    {
      name: "Lilac Floral Tie-Up Kurta Set",
      price: 649,
      image: "image/top4.jpeg"
    },
    {
      name: "Pink Bloom Kurta Set",
      price: 799,
      image: "image/top5.jpeg"
    },
    {
      name: "Orange Floral Kurta Set",
      price: 799,
      image: "image/top6.jpeg"
    },
    {
      name: "Royal Plum Motif Kurta Set",
      price: 699,
      image: "image/top7.jpeg"
    },
     {
      name: "Aqua Semi-Bandhani Kurta",
      price: 899,
      image: "image/top8.jpeg"
    },
     {
      name: "Red Semi-Bandhani Kurta Set",
      price: 1200,
      image: "image/top9.jpeg"
    },
     {
      name: "Olive Paisley Kurta Set",
      price: 649,
      image: "image/top10.jpeg"
    },
     {
      name: "Lavender Bloom Kurta Set",
      price: 699,
      image: "image/top11.jpeg"
    },
     {
      name: "Red Polka Dot Kurta Set",
      price: 649,
      image: "image/top12.jpeg"
    }
  ];

  const container = document.getElementById("products");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button class="order-btn">Order on WhatsApp</button>
    `;

    const btn = card.querySelector(".order-btn");

    btn.addEventListener("click", () => {
      const msg = `Hi, I want to order: ${p.name}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    });

    container.appendChild(card);
  });

});

// SCROLL
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       YOUR WHATSAPP NUMBER
    ===================================== */

    const phoneNumber = "+918431905840";


    /* =====================================
       
    ===================================== */

    const menuBtn = document.getElementById("menuBtn");

    const navLinks = document.querySelector(".nav-links");


    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    /* =====================================
       CONTACT FORM
    ===================================== */

    const contactForm =
        document.getElementById("contactForm");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const contact =
            document.getElementById("contact").value.trim();


        const subject =
            document.getElementById("subject").value;


        const message =
            document.getElementById("message").value.trim();


        /* CHECK EMPTY FIELDS */

        if (!name || !contact || !message) {

            alert("Please fill in all required fields.");

            return;

        }


        /* CREATE WHATSAPP MESSAGE */

        const whatsappMessage =
`Hello StyleWithDhaara! 👋

I would like to make an enquiry.

Name: ${name}

Contact: ${contact}

Subject: ${subject}

Message:
${message}

Thank you.`;


        /* OPEN WHATSAPP */
const encodedMessage = encodeURIComponent(whatsappMessage);

// Try opening WhatsApp app directly
const whatsappAppURL =
    `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

window.location.href = whatsappAppURL;

        /* CLEAR FORM */

        contactForm.reset();

    });

});