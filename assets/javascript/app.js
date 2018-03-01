// --------------------------------------------------------------------------------------------
// stuff I need for later:

// host = api.giphy.com

// path = /v1/gifs/search

// all together queryURL is "http://api.giphy.com/v1/gifs/search"
// --------------------------------------------------------------------------------------------

// create an array of strings
var topics = [
    "chinchilla", 
    "bat", 
    "tiger", 
    "axolotl", 
    "cuttlefish", 
    "hawk", 
    "eagle"
];

// displayAnimalInfo re-renders the HTML to display appropriate content
function displayAnimalInfo() {

var api_key = "api_key=GXWvgik3KncEquD8z7HjiF94kBDSpTfr"
var query = "&q=animal"
var queryURL = "https://api.giphy.com/v1/gifs/search?"+ api_key + query + "limit=10&offset=0&rating=PG&lang=en"

}

// function for displaying array items
function renderButtons() {
    // deletes buttons prior to adding movie buttons
    $("#topic-buttons").empty()
    // loops through topics array
    for (var i = 0; i <topics.length; i++) {
        // creates a button
        var a = $("<button>")
        // adds class 'animal'
        a.addClass("topic")
        // add data attribute with a value of the topic at index i
        a.attr("data-name", topics[i])
        // providing the button's text with a value of the topic at index i
        a.text(topics[i])
        // adds the button to the HTML
        $("#topic-buttons").append(a);
    }
}
// handle events on input submission
$("#add-topic").on("click", function(event) {
    event.preventDefault()
    // grabs text from input box
    var animal = $("#topic-input").val().trim()
    // the topic from the textbox is added to the array
    topics.push(animal)
    // call the renderButtons function at least once to display initial list of animals in topics array
    renderButtons()
    
    // ajax call
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    // create div to hold animal gif
    var animalDiv = $("<div class='animal'>");
    // store rating data
    var rating = response.rating;
    // creating an element to have rating displayed
    var pOne = $("<p>").text("Rating: " + rating);
    // Displays the rating
    animalDiv.append(pOne);
    // displays in "topic-display"
    $("#topics-display").prepend(movieDiv)
})

renderButtons()
