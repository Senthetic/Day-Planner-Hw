$(document).ready(function() {
    // listens for saveBtn to be clicked
    $(".saveBtn").on("click", function() {
      // save the value of the button as well as the time it relates to
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // saving above values into local storage
      localStorage.setItem(time, value);
    });
  