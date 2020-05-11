async function displayQuote() {
  let quote;
  try {
    const response = await fetch('/api/quote');
    quote = await response.json();
  } catch (error) {
    quote = { text: `Could not get quote: ${error.message}` };
  }
  const div = document.getElementById('quote');
  div.textContent = quote.text;
}

displayQuote();
