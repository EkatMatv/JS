const starsContainer = document.getElementById('stars-container');
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');
let currentRating = 0;

function setRating(rating) {
    currentRating = Math.max(0, Math.min(5, rating));

    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });

    if (currentRating === 0) {
        ratingText.textContent = 'Оцените от 1 до 5 звёзд';
    } else {
        ratingText.textContent = `Вы поставили ${currentRating} ${getStarWord(currentRating)}`;
    }
}

function getStarWord(count) {
    if (count === 1) return 'звезду';
    if (count >= 2 && count <= 4) return 'звезды';
    return 'звёзд';
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        setRating(rating);
    });
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            setRating(parseInt(event.key));
            break;

        case '0':
            setRating(0);
            break;

        case 'ArrowRight':
            setRating(currentRating + 1);
            break;

        case 'ArrowLeft':
            setRating(currentRating - 1);
            break;

        case 'Escape':
            setRating(0);
            break;
    }
});
window.addEventListener('load', () => {
    window.focus();
});