// ========================== S T A R T  -  G R E E T I N G =========================
function saveName() {
    var name = document.getElementById("nameInput").value;
    if (localStorage.getItem("name") != name) {
        // Reload the current page
        location.reload();

        localStorage.setItem("name", name);
        // document.getElementById("nameInputContainer").style.display = "none";

        // Reload the current page
        location.reload();
    }
}

function loadName() {
    var name = localStorage.getItem("name");
    if (name != null) {
        setInterval(function () {
            // Get the current time in hours and minutes
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();

            // Determine the appropriate greeting based on the time of day
            var greeting;
            if (hour >= 0 && hour < 12) {
                greeting = "Good morning";
                // Display the greeting with the current time in minutes
                document.getElementById("greeting").innerHTML = "<div class='greeting'><h1>" + hour + ":" + (minute < 10 ? "0" : "") + minute + "am, " + greeting + ", " + name + "!</h1><p>Welcome back to our food planner. We're glad to have you here!</p></div>";
            } else if (hour >= 12 && hour < 18) {
                greeting = "Good afternoon";
                // Display the greeting with the current time in minutes
                document.getElementById("greeting").innerHTML = "<div class='greeting'><h1>" + hour + ":" + (minute < 10 ? "0" : "") + minute + "pm, " + greeting + ", " + name + "!</h1><p>Welcome back to our food planner. We're glad to have you here!</p></div>";
            } else {
                greeting = "Good evening";
                // Display the greeting with the current time in minutes
                document.getElementById("greeting").innerHTML = "<div class='greeting'><h1>" + hour + ":" + (minute < 10 ? "0" : "") + minute + "pm, " + greeting + ", " + name + "!</h1><p>Welcome back to our food planner. We're glad to have you here!</p></div>";
            }
        }, 1000); // Update every 1000 milliseconds (1 second)

        // document.getElementById("greeting").innerHTML = greeting + ", " + name + "!";
        document.getElementById("nameInputContainer").style.display = "none";
    }
}
// ========================== E N D  -  G R E E T I N G =========================
// -------------------------------------------------------------------------------------------------------------



// ========================== S T A R T  -  M O T I V A T I O N A L -  M E S S A G E S =========================
// Define the URL of the API that provides the motivational messages
const API_URL = "https://type.fit/api/quotes";

// Define the default messages to use when no internet connection is available
const DEFAULT_MESSAGES = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You are never too old to set a new goal or to dream a new dream.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Chase your dreams but always know the road that will lead you home again.",
];

// Get the last time a message was displayed from localStorage
let lastDisplayed = localStorage.getItem("lastDisplayed");

// If there is no lastDisplayed value in localStorage, set it to 0
if (!lastDisplayed) {
    lastDisplayed = 0;
    localStorage.setItem("lastDisplayed", lastDisplayed);
}

// Get the current time in milliseconds
const now = new Date().getTime();

// Calculate the time since the last message was displayed
const timeSinceLastDisplayed = now - lastDisplayed;

// If more than 24 hours have passed since the last message was displayed
// if (timeSinceLastDisplayed > 24 * 60 * 60 * 1000) {
if (timeSinceLastDisplayed > 1000) {
    // Make a request to the API to get a new message
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            // Get a random message from the API response
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomMessage = data[randomIndex];

            // Display the new message to the user
            const messageElement = document.getElementById("message");
            messageElement.innerText = randomMessage.text;
            // Show the motivation message div
            const motivationDiv = document.getElementById("motivation-message");
            motivationDiv.style.display = "block";
            // Update the lastDisplayed value in localStorage with the current time
            localStorage.setItem("lastDisplayed", now);
        })
        .catch((error) => {
            // If there is an error fetching the message from the API, use the next default message instead
            const lastDisplayedIndex = parseInt(lastDisplayed);
            const nextIndex = (lastDisplayedIndex + 1) % DEFAULT_MESSAGES.length;
            const messageElement = document.getElementById("message");
            messageElement.innerText = DEFAULT_MESSAGES[nextIndex];
            // Show the motivation message div
            const motivationDiv = document.getElementById("motivation-message");
            motivationDiv.style.display = "block";
            // Update the lastDisplayed value in localStorage with the current time
            localStorage.setItem("lastDisplayed", nextIndex.toString());
        });
} else {
    // If less than 24 hours have passed since the last message was displayed, hide the motivation message div
    const motivationDiv = document.getElementById("motivation-message");
    motivationDiv.style.display = "none";
}
// ========================== E N D  -  M O T I V A T I O N A L -  M E S S A G E S =========================