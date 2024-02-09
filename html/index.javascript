document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form data
  var formData = new FormData(event.target);

  // Display form data
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

  // You can do more with this data, like sending it to a server using AJAX