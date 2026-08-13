document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // YOUR WHATSAPP NUMBER
    // =====================================

    const phoneNumber = "+917411453731";


    // =====================================
    // CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contactForm");


    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }


    contactForm.addEventListener("submit", function (event) {

        // Stop the form from refreshing the page
        event.preventDefault();


        // Get values from the form
        const name =
            document.getElementById("name").value.trim();

        const contact =
            document.getElementById("contact").value.trim();

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value.trim();


        // =====================================
        // VALIDATION
        // =====================================

        if (name === "") {
            alert("Please enter your name.");
            return;
        }


        if (contact === "") {
            alert("Please enter your phone number or email.");
            return;
        }


        if (message === "") {
            alert("Please enter your message.");
            return;
        }


        // =====================================
        // CREATE WHATSAPP MESSAGE
        // =====================================

        const whatsappMessage =
`Hello StyleWithDhaara! 👋

I would like to make an enquiry.

Name: ${name}

Phone / Email: ${contact}

Subject: ${subject}

Message:
${message}

Thank you.`;


        // =====================================
        // CREATE WHATSAPP LINK
        // =====================================

        const encodedMessage = encodeURIComponent(whatsappMessage);

// Try opening WhatsApp app directly
const whatsappAppURL =
    `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

window.location.href = whatsappAppURL;


        // =====================================
        // CLEAR FORM
        // =====================================

        contactForm.reset();

    });

});