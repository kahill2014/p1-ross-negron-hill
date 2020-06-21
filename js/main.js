// Set span in modal header to reflect which tile was clicked
$(".catering-tile").click(function(){
  $("#cater-modal-type").text($(this).find($("figcaption")).text().toLowerCase());
});

// Show thank you modal when the cater form is submitted
$("#cater-submit").click(function(){
  $("#cater-modal .modal-body").text("Thank you for your submission! We will reach out to you shortly.");
  $("#cater-submit").hide();
  $("#cater-ok").show();
});

// Show thank you modal when the contact form is submitted
$("#contact-submit").click(function(){
  $("#contact-modal .modal-body").text("Thank you for your submission! We will reach out to you shortly.");
  $("#contact-modal").show();
});

// Hide modal when "Got it!" button is clicked from the thank you message for catering
$("#cater-ok").click(function(){
  $("#cater-modal").modal("hide");
});

// Hide modal when "Got it!" button is clicked from the thank you message for contact
$("#contact-ok").click(function(){
  $("#contact-modal").modal("hide");
});

// Update remaining characters for contact form message
$("textarea").keyup(function(){
  var remaining = 255 - $("textarea").val().length;
  if (remaining <= 0){
    $("#excess-chars").show();
    $("#chars-remaining").text("0");
  } else {
    $("#excess-chars").hide();
    $("#chars-remaining").text(remaining);
  }
});
