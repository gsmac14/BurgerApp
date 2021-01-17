
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour= $(this).data("newdevour");

    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
  
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
