async function displayQuote() {
  let quote;

  try {
    // Fetch quote object from API
    let response = await fetch('/api/quote');
    quote = await response.json();

    // Preload image
    response = await fetch(quote.image);
    const image = await response.blob()
    quote.image = URL.createObjectURL(image);
  } catch (error) {
    quote = { text: `Could not get quote: ${error.message}` };
  }

  // Update background image
  document.body.style.background = quote.image ? `url(${quote.image}) center / cover` : '#f43';

  // Update text
  const div = document.getElementById('quote');
  div.textContent = quote.text;
}

displayQuote();
