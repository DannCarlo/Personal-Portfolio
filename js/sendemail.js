$(document).ready(function() {
  document.querySelector("form").addEventListener("submit", handleSubmit);
});

const handleSubmit = (event) => {
  event.preventDefault();

  if (!validateForm()) {
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => alert("Thank you for your submission."))
    .catch((error) => alert(error));
    clearInputValue();
  }
  else {
    alert("Please answer the form properly.")
  }
};

function validateForm() {
  "use strict";
  var title = $("#name").val();
  var err = true;
  if (title == "" || title == null) {
      $("#name").addClass("validation");

      var err = true;
  } else {
      $("#name").removeClass("validation");
  }
  var email = $("#email").val();
  if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
      $("#email").addClass("validation");

      var err = true;
  } else {
      $("#email").removeClass("validation");
  }
  var title = $("#message").val();
  if (title == "" || title == null) {
      $("#message").addClass("validation");
      var err = true;
  } else {
      $("#message").removeClass("validation");
  }
  return err;
}

function clearInputValue() {
  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
}