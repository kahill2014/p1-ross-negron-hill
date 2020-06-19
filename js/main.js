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

// Hide modal when "Got it!" button is clicked from the thank you message
$("#cater-ok").click(function(){
  $("#cater-modal").modal("hide");
});
