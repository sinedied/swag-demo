async function displayQuote() {
  let quote;

  try {
    const response = await fetch('/api/quote');
    quote = await response.json();
  } catch (error) {
    quote = { text: `Could not get quote: ${error.message}` };
  }

  // Update background image
  document.body.style.backgroundImage = `url(${quote.image})`;

  // Update text
  const div = document.getElementById('quote');
  div.textContent = quote.text;
}

displayQuote();
