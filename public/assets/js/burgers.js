$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger-input").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});