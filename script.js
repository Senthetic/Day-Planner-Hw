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
    //displays the current day on the top of the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});