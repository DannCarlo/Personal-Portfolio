        function validateForm()
            {
             "use strict";  
                var title = $("#name").val();
                var err=true;
                if (title=="" || title==null) {  
                  $("#name").addClass("validation");
                
                  var err= false;
                } else {  $("#name").removeClass("validation");}
                var email = $("#email").val();
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                 $("#email").addClass("validation"); 
                 
                   var err= false;
                } else {  $("#email").removeClass("validation"); }
                var title = $("#message").val();
                if (title=="" || title==null) { 
                  $("#message").addClass("validation"); 
                   var err= false;
                } else{ $("#message").removeClass("validation"); }
              return err;
            }

            const handleSubmit = (event) => {
              event.preventDefault();

              const myForm = event.target;
              const formData = new FormData(myForm);
              
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
              })
                .then(() => document.getElementById("successmsg").innerHTML = "The message has been sent!")
                .catch((error) => document.getElementById("successmsg").innerHTML = error);
            };

            document
              .getElementById("form1")
              .addEventListener("submit", handleSubmit);
            /*
            $(document).ready(function(){
				"use strict"; 
              $("#button").click(function(e){
                if(validateForm()){
                  const myForm = event.target;
                  const formData = new FormData(myForm);
                 e.preventDefault();
                  $.ajax({type: "POST",
                          url: "../send-email.php",
                          data:$("#form1").serialize(),
                          success:function(result){
                          $("#successmsg").html(result);
                          
                        }}); 
                  $("#name").val('');
                  $("#email").val('');
                  $("#message").val('');
                 // $("#successmsg").remove();
               }
               else
               {
                return false;
               }
              });
            });
            */
        