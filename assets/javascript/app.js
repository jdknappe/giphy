// create an array of strings
var topics = [
    "chinchilla", 
    "dog", 
    "cat", 
    "goat", 
    "cow", 
    "chicken", 
    "bat", 
    "tiger", 
    "axolotl", 
    "cuttlefish", 
    "hawk", 
    "eagle"
];
// function for displaying animals
function renderButtons() {
    // deletes buttons prior to adding movie buttons
    $("#topicButtons").empty()
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
        $("#topicButtons").append(a);
    }
}
// handle events on input submission
$("#topics-input").on("submit", function(event) {
    event.preventDefault()
    // grabs text from input box
    var animal = $("#topics-input").val().trim()
    // the topic from the textbox is added to the array
    topics.push(animal)
    // call the renderButtons function at least once to display initial list of animals in topics array
    renderButtons()
})

