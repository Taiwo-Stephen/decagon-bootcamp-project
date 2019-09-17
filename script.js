$(function(){

    $(".btn-primary").click(function(){
        const outputfirstname = $("#inputFirstname").val();
        const outputlastname = $("#inputLastname").val();
        $("tbody").append("<tr><td> Delete </td> <td>" + outputfirstname + "</td> <td>" + outputlastname + "</td> <td> <input type='radio'> Present <input type='radio'>    Absent </td> </tr>");
    });

    
});