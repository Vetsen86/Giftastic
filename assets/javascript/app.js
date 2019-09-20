$(document).ready(function () {
    var topics = ["Tetris", "Minecraft", "Grand Theft Auto V", "Fortnite", "Red Dead Redemption 2", "God of War",
        "Monster Hunter", "Skyrim", "Breath of the Wild", "Metal Gear"];

    function renderButtons(topics) {
        
        for (i = 0; i < topics.length; i++) {
            var newButton = $("<button>");
            newButton.text(topics[i]);
            newButton.attr("data-name", topics[i]);
            $("#buttons").append(newButton);
        }
    }
    
    renderButtons(topics);

    $("#searchSubmit").on("click", function(e) {
        e.preventDefault();

        var input = $("#searchInput").val();

        topics.push(input);

        $("#buttons").empty();

        renderButtons(topics);
    });

    $("button").on("click", function() {
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

            for (i = 0; i < results.length; i++) {
                var newImg = $("<img>");
                newImg.attr("src", results[i].images.fixed_height_still.url);
                $("#images").append(newImg);
            }

        });
        

    });
});