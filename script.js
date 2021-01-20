
// Astrology message and nested arrays

const messageOne = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricon','Aquarius','Pisces'];
const messageTwo = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth'];
const messageThree = ['a leader','financially astute','think too much','family-oriented','very creative','very hard-working','able to find a great spouse','obsessed with the taboo','very wise','a control freak','capable of helping society in a big way','spiritual and misunderstood'];


function generateAstrologyMessage() {
    let randomMessageOne = messageOne[Math.floor(Math.random() * 12)];
    let randomMessageTwo = messageTwo[Math.floor(Math.random() * 12)];
    let randomMessageThree = messageThree[Math.floor(Math.random() * 12)];

    let messageTotal = `I just took my horoscope. My Moon sign is ${randomMessageOne} in the ${randomMessageTwo} house. This means that I am ${randomMessageThree}.`

    return messageTotal
}

console.log(generateAstrologyMessage());
