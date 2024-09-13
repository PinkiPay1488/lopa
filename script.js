// script.js
document.addEventListener("DOMContentLoaded", () => {
    const rates = {
        diamond: 10,
        silver: 100,
        gold: 1000
    };

    // Update currency rates every 5 seconds
    setInterval(() => {
        console.log("Currency rates updated!");
        // You can update rates dynamically here
    }, 5000);
});
