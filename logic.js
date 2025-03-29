// fetching the api 
let surprise_button = document.querySelector("button");
let first_screen = document.querySelector(".display");
let second_screen = document.querySelector(".main-screen");
let picture = document.querySelector(".daily-snap"); // Daily picture
let description = document.querySelector(".main_paragraph"); // Explanation of the picture
let pictureDate = document.querySelector(".picture_date");
const API = "mrDkHdUX82jjqy8yKbkwtxuBoSwT0SFMIcQHCzxN";
async function fetchAPOD() {
    try {
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}`);
        let data = await response.json();

        // Update the webpage with fetched data
        pictureDate.innerText = `📅 Date: ${data.date}`;
        picture.style.backgroundImage = `url(${data.url})`;
        description.innerText = data.explanation;

    } catch (error) {
        console.log("Error fetching NASA data:", error);
    }
}
// Call the function to fetch and display APOD
fetchAPOD();
document.addEventListener("DOMContentLoaded", function () {
    const surpriseBtn = document.querySelector("button");
    const displayScreen = document.querySelector(".display");
    const mainScreen = document.querySelector(".main-screen");

    surpriseBtn.addEventListener("click", function () {
        displayScreen.classList.add("hide-display");
        setTimeout(() => {
            mainScreen.classList.add("show-main");
        }, 1000); // Matches the transition duration
    });
});