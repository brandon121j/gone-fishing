
const prompt = require('prompt-sync')({ sigint: true });

let time = 6;
let weight = 0;
let money = 0.00;

fish = ([
    {name: 'Blue fish', weight: 0.43, money: 0.47},
    {name: 'Silver fish', weight: 0.23, money: 1.23},
    {name: 'Gray fish', weight: 0.11, money: 0.87},
    {name: 'Red fish', weight: 0.82, money: 0.24},
    {name: 'Yellow fish', weight: 1.43, money: 5.00},
]);


let caught = [];
let random = Math.floor(Math.random() * fish.length);
let fishing = fish[random];
caught.push(fishing);

console.log(' ');
console.log('Youve gone fishing! Try to maximize the value of your caught fish. You can fish');
console.log('for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log(' ');
console.log('===============================================================');
console.log(' ');
console.log(' ');
console.log(`The time is ${time}:00. So far you've caught:`);
console.log(`${fish} fish, ${weight} lbs, ${money}`)
console.log(' ');
console.log(`You caught a `)
console.log('===============================================================');

// Generate random fish 
random = Math.floor(Math.random() * fish.length);
fishing = fish[random];
caught.push(fishing);



// while(time < 12) { 




















//     console.log('===============================================================');
//     console.log(' ');
//     console.log(`The time is ${time}:00. So far you've caught:`);
//     console.log(`${fish} fish, ${weight} lbs, ${money}`)
//     console.log(' ');
//     console.log('===============================================================');

// }


