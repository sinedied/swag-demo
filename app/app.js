async function displayQuote() {
  let quote;
  try {
    quote = await fetch('/api/quote');
  } catch (error) {
    quote = `Could not get quote: ${error.message}`;
  }
  const div = document.getElementById('quote');
  div.textContent = quote;
}

displayQuote();
