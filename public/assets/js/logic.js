console.log("hiya")

$(function () {

    $("#add-burger-btn").on("click", function () {
        var newBurger = {
            name: $("#burgerForm").val().trim(),
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".eat-btn").on("click", function () {
        var id = $(this).data("id");

        var eatenState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function () {
                console.log("changed devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});