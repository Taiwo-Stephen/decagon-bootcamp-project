$(function(){
    $("#log-btn").on("click",function(){
        const username = $("#username").val();
        const password = $("#password").val();

        if (username === "" || password === "") {
            $("#failed-login").append("*Fill in all empty space");
            // alert("*fill all space") ;
        } else if (username === "admin" && password === "admin1234") {
            document.location.href="index.html"
        } else {
            $("#failed-login").append("*Incorrect login details");
        }
    })
})


// window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();