$(document).ready(function() {

       // The code below is the script for creating an employee biodata and adding it to the view.html page
       $(document).on("submit","#form-data", function(event){
        let firstnameValue = $("#inputFirstName").val(), lastnameValue = $("#inputLastName").val(),
        emailValue = $("#inputEmail").val(), positionValue = $("#inputPosition").val(), genderValue = $("#inputGender").val(), 
        dateValue = $("#inputDate").val(), statusValue = $("#inputAttendance").val();
        if(firstnameValue === "" || lastnameValue === "" || emailValue === "" || positionValue === "" || dateValue === "" || genderValue === "" || statusValue === "choose..."){
            alert("Field can not be empty")
        } else{
            let formInput = {
                "firstname" : firstnameValue,
                "lastname" : lastnameValue,
                "email" : emailValue,
                "position" : positionValue,
                "gender" : genderValue,
                "date" : dateValue,
                "status" : statusValue
            }

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/employees",
            data: formInput,
            dataType: "json",
            encode: "true" 
        })

    .done(function(data) {
        alert("Employee Biodata successfully created")
        alert(dateValue) 
        $("#form-data").each(function(){
            this.reset();
        });
    })    
}
    event.preventDefault();
  }); 
    // The code below is for the view.html to view empolyee information
    $("#view-btn").click(function() {
  
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees",
        success: function(result) {
          console.log(result);
          var output =
            "<table class='table table-striped'> <thead> <tr> <th scope='col'>ID</th> <th scope='col'>Firstname</th> <th scope='col'>Lastname</th> <th scope='col'>Email</th>  <th scope='col'>Position</th> <th scope='col'>Gender</th> <th scope='col'>Date</th> <th scope='col'>Status</th> <th scope='col'>Update</th> </tr> </thead><tbody>";
          for (var i in result) {
            output +=
              "<tr><td>" +
              result[i].id +
              "</td><td>" +
              result[i].firstname +
              "</td><td>" +
              result[i].lastname +
              "</td><td>" +
              result[i].email +
              "</td><td>" +
              result[i].position +
              "</td><td>" +
              result[i].gender +
              "</td><td>" +
              result[i].date +
              "</td><td>" +
              result[i].status +
              "</td><td>" +
              "<button type='button' id='trash-btn><i class='fa fa-trash' id='trash' aria-hidden='true'></i></button><button type='button'><i class='fa fa-pencil-square-o' id='edit' aria-hidden='true'></i></button> </td></tr>";
          }
          output += "</tbody></table>";
          $("#viewList").html(output);
          $("table").addClass("table");
        }
      });
    });

    // the code below is for the delete button in the view.html 
    $("#trash-btn").click(function(){
        $.ajax({
            url: "http://localhost:3000/employees" + id,
            method: "DELETE",
            dataType: "json",
            success: function(result) {
                $("#trash").closest("tr").remove();
            }
        });
    })
  });

//   $(function(){
//     // The code below is the script for the login page
//     $('#log-btn').click(function(){
//         let username = $('#username').val();
//         let password = $('#password').val();
//         if(username.length === 0 || password.length === 0){
//             $("#failed-login").text("Fill in all field");
//         }        
//         $.ajax({
//             type: 'GET',
//             url: "http://localhost:3000/login",
            
//             success: function(result){
//                 if ((result.username === username)&&(result.password===password)) {
//                     document.location.href = "./page/create.html";
//                 }
//                 },
//             error: function(){
//                 $("#failed-login").text("Incorrect login details");
//             }
//         });

//     })

//