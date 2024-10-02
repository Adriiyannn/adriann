// Initialize EmailJS with your public API key
(function () {
  emailjs.init("FKDoWlMgxXTG3984p"); // Replace with your actual API public key
  console.log("EmailJS initialized");
})();

// Add event listener to form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted");

    // Use EmailJS to send the form data
    emailjs
      .sendForm("service_13xunae", "template_ylqw3vd", this) // Replace with your actual service and template IDs
      .then(
        function () {
          console.log("Email sent successfully");
          alert("Message Sent Successfully!");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
  });
