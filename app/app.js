async function displayQuote() {
  const quote = await fetch('/api/quote');
  document.body.quote.textContent = quote;
}
displayQuote();