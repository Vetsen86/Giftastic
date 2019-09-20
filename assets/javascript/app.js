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
});