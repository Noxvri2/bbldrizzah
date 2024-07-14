document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('./song.mp3'); // Path to your audio file

    var playPauseButton = document.getElementById('play-pause-button');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause'; // Update button text to 'Pause'
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play'; // Update button text to 'Play'
        }
    });
});
