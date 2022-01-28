const quotes = [
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison",
  },
  {
    quote: "You must stay drunk on writing so reality cannot destroy you.",
    author: "Ray Bradbury, Zen in the Art of Writing",
  },
  {
    quote:
      "How vain it is to sit down to write when you have not stood up to live.",
    author: "Henry David Thoreau",
  },
  {
    quote: "You can make anything by writing.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",
    author: "John Steinbeck",
  },
  {
    quote: "Words are a lens to focus one's mind.",
    author: "Ayn Rand",
  },
  {
    quote:
      "A blank piece of paper is God's way of telling us how hard it is to be God.",
    author: "Sidney Sheldon",
  },
  {
    quote: "Half my life is an act of revision.",
    author: "John Irving",
  },
  {
    quote:
      "When you make music or write or create, it's really your job to have mind-blowing, irresponsible, condomless sex with whatever idea it is you're writing about at the time.",
    author: "Lady Gaga",
  },
  {
    quote: "Writers live twice.",
    author: "Natalie Goldberg",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNumber];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
