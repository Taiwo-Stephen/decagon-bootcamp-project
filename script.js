$(function(){
    $("#submit-btn").on("submit","#form-data", function(){
        let formInput = {
            "id" : $("#inputId").val(),
            "firstname" : $("#inputFirstName").val(),
            "lastname" : $("#inputLastName").val(),
            "email" : $("#inputEmail").val(),
            "position" : $("#inputPosition").val(),
            "gender" : $("#inputGender").val(),
            "date" : $("inputDate").val(),
            "status" : $("#inputAttendance").val()
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/login",
            data: formInput,
            dataType: "json",
            encode: "true" 
        })

    .done(function(data) {
        alert("Employee Biodata successfully created") 
        $("#form-data").each(function(){
            this.reset();
        });
    })
    event.preventDefault();

    $("#log-btn").on("click",function(){
        const username = $("#username").val();
        const password = $("#password").val();

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/login"          
           
        });
    })
    $("")
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