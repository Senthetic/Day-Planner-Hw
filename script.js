$(document).ready(function() {
    // listens for saveBtn to be clicked
    $(".saveBtn").on("click", function() {
      // save the value of the button as well as the time it relates to
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // saving above values into local storage
      localStorage.setItem(time, value);
    });
    function updateHour() {
        // finds the current hour
        var currentHour = moment().hours();
        console.log(currentHour);
    
    //loops over each time-block and gets the id and splits it to get the time of block
    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(timeBlockHour);
        //if the current timeblock is < current hour, add the past class
        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
          } //if the current timeblock is the current hour, remove potential past class and add present
          else if (timeBlockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } //add class of future to everything after the present
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
    });
}
    //loads any local storage data
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    //calls the updateHour function to use moment to show past present and future time blocks
    updateHour();
    //sets up interval to check when the hour needs to be updated, when it does it calls it.
    var interval = setInterval(updateHour, 15000);
    //displays the current day on the top of the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});