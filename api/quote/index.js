const https = require('https');

const quotes = [
  'Wherever you go, no matter what the weather, always bring your own sunshine.',
  'You\’re awesome.',
  'Happiness is the only thing that multiplies when you share it.',
  'It always seems impossible until it is done.',
  'Let your unique positive energy inspire confidence in others.',
  'The best is yet to come.',
  'You\'re capable of more than you can even dream.',
  'You deserve the best.'
];

const unplashApi = 'https://source.unsplash.com/1920x1080?dream';

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const image = await getImage();
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  context.res = {
    body: {
      image,
      text
    }
  };
};
