// On ready
$(document).ready(function(){

// Save button functionality

$(".saveBtn").on("click", function(){
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to local storage variable
    localStorage.setItem(time, value);
})


// Hour updater

function hourUpdater() {
    // gets the current number of hours
    var currentHour = moment().hours();

    // Looping over time blocks

    $(".time-block").each(function(){
     var blockHour = parseInt($(this).attr("id").split("-")[1]);
     
     if (blockHour < currentHour) {
         $(this).addClass("past");
     }
     else if (blockHour === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");
     }
     else {
         $(this).removeClass("present");
         $(this).removeClass("past");
         $(this).addClass("future");
     }
   });


}

// calling hourUpdater

hourUpdater();

// Loading local storage saved

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Displaying current day on the page

    var currentDay = moment().format('MMMM Do, YYYY');
    $("#currentDay").text(currentDay);



});