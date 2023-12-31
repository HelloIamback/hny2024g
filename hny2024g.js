document.addEventListener('DOMContentLoaded', function () {
    var message = document.getElementById('hiddenMessage');
    var revealButton = document.getElementById('revealButton');

    function displayLoveMessage() {
        var nameInput = document.getElementById('name');
        var loverName = nameInput.value.trim();
        var userNameSpan = document.createElement('span');
        userNameSpan.textContent = loverName ? loverName + "'s" : "your";
        message.innerHTML = "";
        message.appendChild(userNameSpan);

        var loveMessages = [
            "You are the sunshine that brightens my days and the warmth that fills my heart. Happy New Year, my love!",
            "May our love story continue to unfold with joy, laughter, and countless beautiful moments. Happy New Year, my dear!",
        ];

        var randomIndex = Math.floor(Math.random() * loveMessages.length);
        var randomLoveMessage = loveMessages[randomIndex];

        var loveMessageSpan = document.createElement('span');
        loveMessageSpan.textContent = randomLoveMessage;

        message.appendChild(loveMessageSpan);
        message.style.display = 'block';
    }

    revealButton.addEventListener('click', displayLoveMessage);
});
