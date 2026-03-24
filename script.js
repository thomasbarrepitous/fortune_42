const fortunes = [
    "A journey of a thousand miles begins with a single step.",
    "Good things come to those who wait, but better things come to those who act.",
    "Your kindness will be repaid tenfold.",
    "An unexpected visitor will bring you good news.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your creativity will lead to unexpected opportunities.",
    "A smile is your passport into the hearts of others.",
    "The obstacle in your path is actually your path.",
    "Trust your intuition. It knows more than you think.",
    "A pleasant surprise is waiting for you around the corner.",
    "Your hard work will pay off sooner than you expect.",
    "The secret to getting ahead is getting started.",
    "Fortune favors the bold.",
    "You will find what you seek in the last place you look.",
    "New beginnings are often disguised as painful endings.",
    "Your patience will be rewarded with wisdom.",
    "The answer you seek is closer than you think.",
    "A friend is a gift you give yourself."
];

const cookie = document.getElementById('cookie');
const fortuneElement = document.getElementById('fortune');

const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
fortuneElement.textContent = randomFortune;

cookie.addEventListener('click', function() {
    if (cookie.classList.contains('opened')) {
        return;
    }

    cookie.classList.add('opened');
    fortuneElement.classList.add('visible');
});
