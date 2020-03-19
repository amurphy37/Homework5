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

// Displaying current day on the page





});