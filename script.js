const quoteBox = document.getElementById("quote-box");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

const apiUrl = "http://localhost:3000/quote";

async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteBox.textContent = `${data.content} – ${data.author}`;
  } catch (error) {
    console.error("API hatası:", error);
    quoteBox.textContent = "Alıntı yüklenemedi ❌";
  }

  // Arka plan rengini değiştir
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
}

function tweetQuote() {
  const tweetText = encodeURIComponent(quoteBox.textContent);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweetQuote);

getQuote();
