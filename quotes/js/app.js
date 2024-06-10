let quoteText = document.querySelector('.quote-text');
let quoteAuthor = document.querySelector('.quote-author');





let DATA = null; 

function newQuote() {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            DATA = data; 
            const randomIndex = Math.floor(Math.random() * DATA.length); // 
            const randomQuote = DATA[randomIndex].text; 
            const randomAuthor = DATA[randomIndex].author; 
            console.log(`Rastgele Alıntı: "${randomQuote}" - ${randomAuthor}`);
            quoteText.innerHTML = randomQuote
            quoteAuthor.innerHTML = randomAuthor
        })
      
}

// S E N D       T W E E T   Q U O T E
function tweetQuote() {
    let quoteText = document.querySelector('.quote-text').textContent;
    let quoteAuthor = document.querySelector('.quote-author').textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quoteText}" ${quoteAuthor}`)}`;
    window.open(tweetUrl, '_blank');
}
//  V O I C E
function speakQuote() {
    let quoteText = document.querySelector('.quote-text').textContent;
    let quoteAuthor = document.querySelector('.quote-author').textContent;
    const msgVoice = new SpeechSynthesisUtterance(`${quoteText} ${quoteAuthor}`);
    msgVoice.lang = 'en-US'
    msgVoice.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google US English')
    speechSynthesis.speak(msgVoice);
}

speechSynthesis.onvoiceschanged = function () {

    var voices = speechSynthesis.getVoices();

    // voices.forEach(voice => console.log(voice.name, voice.lang));
};