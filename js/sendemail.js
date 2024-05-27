function validateForm() {
    "use strict";
    var title = $("#name").val();
    var err = true;
    if (title == "" || title == null) {
        $("#name").addClass("validation");

        var err = false;
    } else {
        $("#name").removeClass("validation");
    }
    var email = $("#email").val();
    if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
        $("#email").addClass("validation");

        var err = false;
    } else {
        $("#email").removeClass("validation");
    }
    var title = $("#message").val();
    if (title == "" || title == null) {
        $("#message").addClass("validation");
        var err = false;
    } else {
        $("#message").removeClass("validation");
    }
    return err;
}
$(document).ready(function() {
    "use strict";
    $("#button").click(function(e) {
        if (!validateForm()) {
          e.preventDefault();
          const formData = new FormData(document.querySelector("form"));

          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString(),
          })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
        } else {
            return false;
        }
    });
});

        