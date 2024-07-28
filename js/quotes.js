const quotes = [
    {quote: "JUST DO IT",
     author: "NIKE",
    },
    {quote: "The way to get started is to quit talking and begin doing.",
     author: "Walt Disney",
    },
    {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
     author: "Albert Einstein",
    },
    {quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
     author: "Steve Jobs",
    },
    {quote: "You will face many defeats in life, but never let yourself be defeated.",
     author: "Maya Angelou",
    },
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
     author: "Winston Churchill",
    },
    {quote: "The future belongs to those who believe in the beauty of their dreams.",
     author: "Eleanor Roosevelt",
    },
    {quote: "While you hesitate, time does not.",
     author: "Seung",
    },
    {quote: "siuuuuu",
     author: "좆두형",
    },
    {quote: "Believe you can and you're halfway there.",
     author: "Theodore Roosevelt",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;