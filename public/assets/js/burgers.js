$(function() {
  $(".change-form").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/devoured", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".update-form").on("submit", function(event) {

    event.preventDefault();

    var updatedBurger = {
      name: $("#name").val().trim(),
      devoured: $("#devoured").val().trim()
    };

    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {
        console.log("updated burger");
        location.assign("/");
      }
    );
  });

});
