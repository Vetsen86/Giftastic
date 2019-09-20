$(document).ready(function () {
    var topics = ["Tetris", "Minecraft", "Grand Theft Auto V", "Fortnite", "Red Dead Redemption 2", "God of War",
        "Monster Hunter", "Skyrim", "Breath of the Wild", "Metal Gear"];

    function renderButtons(topics) {
        
        for (i = 0; i < topics.length; i++) {
            var newButton = $("<button>");
            newButton.text(topics[i]);
            newButton.attr("data-name", topics[i]);
            newButton.addClass("button");
            $("#buttons").append(newButton);
        }
    }
    
    renderButtons(topics);

    $(document).on("click", ".button", function() {
        console.log(this);

        var apiKey = "iB5zILy4QY7uboJHsauzmYky3qM0PcwV";
        var searchTerm = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm + 
            "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var results = response.data;

            $("#images").empty();

            for (i = 0; i < results.length; i++) {
                var newDiv = $("<div>");

                var p = $("<p>");

                p.text("Rating: " + results[i].rating);

                newDiv.append(p);
                
                var newImg = $("<img>");
                newImg.attr("src", results[i].images.fixed_height_still.url);
                newImg.attr("data-still", results[i].images.fixed_height_still.url);
                newImg.attr("data-animate", results[i].images.fixed_height.url);
                newImg.attr("data-state", "still");
                newImg.addClass("gif");

                newDiv.append(newImg);

                $("#images").append(newDiv);
            }

        });
        

    });

    $("#searchSubmit").on("click", function(e) {
        e.preventDefault();

        var input = $("#searchInput").val();

        topics.push(input);

        $("#buttons").empty();

        renderButtons(topics);
    });

    $(document).on("click", ".gif", function() {
        console.log(this);
        var state = $(this).attr("data-state");

        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
});