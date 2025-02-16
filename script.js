// Botão de Play
document.getElementById('playButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    // Verifica se o áudio está pausado
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.innerHTML = '<i class="bi bi-pause-circle" style="font-size: 1.5rem;"></i>'; // Troca para ícone de pause
    } else {
        audioPlayer.pause();
        this.innerHTML = '<i class="bi bi-play-circle" style="font-size: 1.5rem;"></i>'; // Troca para ícone de play
    }
});
