
document.addEventListener('DOMContentLoaded', function () {
    // Simulate a click event on a button to trigger a notification
    const simulateButtonClick = () => {
        alert('Notification: Document Updated!');
    };

    // Find the button element by its ID
    const notificationButton = document.getElementById('notificationButton');

    // Add a click event listener to the button
    notificationButton.addEventListener('click', simulateButtonClick);
});
