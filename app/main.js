// Check service worker is enabled
if (navigator.serviceWorker) {
  // register service worker
  navigator.serviceWorker.register('./service-worker.js').catch(console.error);
}

document.addEventListener('DOMContentLoaded', e => {
  const ulContainer = document.querySelector('ul.quotes');

  if (quotesArray && quotesArray.length) {
    ulContainer.innerHTML = '';
    quotesArray.forEach(quote => {
      // add child element
      const liChildItem = document.createElement('li');
      liChildItem.classList.add('card');

      // Content
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      const cardContentText = document.createElement('p');
      cardContentText.appendChild(document.createTextNode(quote.quote));
      cardContent.appendChild(cardContentText);
      
      liChildItem.appendChild(cardContent);

      // Footer
      const cardFooter = document.createElement('div');
      cardFooter.classList.add('card-footer');

      const cardFooterItem = document.createElement('h5');
      cardFooterItem.classList.add('card-footer-item');
      cardFooterItem.appendChild(document.createTextNode(quote.author));

      cardFooter.appendChild(cardFooterItem);

      liChildItem.appendChild(cardFooter);

      ulContainer.appendChild(liChildItem);
    });
  }
});

const quotesArray = [
  {
    color: '#55ACEE',
    quote: 'All you need in this life is ignorance and confidence, and then success is sure.',
    author: 'Mark Twain'
  },
  {
    color: '#E01B4C',
    quote: 'Always be yourself and have faith in yourself. Do not go out and look for a successful personality and try to duplicate it.',
    author: 'Bruce Lee'
  },
  {
    color: '#FFF176',
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt'
  },
  {
    color: 'orange',
    quote: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt'
  },
  {
    color: '#4cb0d9',
    quote: 'When I started counting my blessings, my whole life turned around.',
    author: 'Willie Nelson'
  },
  {
    color: '#E8E6B3',
    quote: 'Do what you love and the necessary resources will follow.',
    author: 'Peter McWilliams'
  },
  {
    color: '#FBFF8F',
    quote: 'Logic will get you from A to Z; imagination will get you everywhere.',
    author: 'Albert Einstein'
  },
  {
    color: '#BFCB9B',
    quote: 'Do not fear mistakes. You will know failure. Continue to reach out.',
    author: 'Benjamin Franklin'
  },
  {
    color: '#E57013',
    quote: 'It always seems impossible until its done.',
    author: 'Nelson Mandela'
  }
];
