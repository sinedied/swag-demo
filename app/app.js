async function displayQuote() {
  const response = await fetch('/api/quote');
  const quote = await response.json();
  document.body.quote.textContent = quote;
}
displayQuote();