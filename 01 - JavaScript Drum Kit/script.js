function stop(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}

function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio || !key)
        return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', stop);
});
window.addEventListener('keydown', play);