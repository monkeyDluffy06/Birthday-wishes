document.addEventListener('DOMContentLoaded', () => {

    const confettiButton = document.getElementById('confetti-button');

    if (confettiButton) {
        confettiButton.addEventListener('click', () => {
            // Trigger confetti from the center
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });

            // A little extra burst from the sides
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        });
    }
});
