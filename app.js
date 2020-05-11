async function displayQuote() {
  let quote;
  try {
    const response = await fetch('/api/quote');
    quote = await response.text();
  } catch (error) {
    quote = `Could not get quote: ${error.message}`;
  }
  const div = document.getElementById('quote');
  div.textContent = quote;
}

displayQuote();
