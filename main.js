
const prompt = require('prompt-sync')({ sigint: true });

let time = 6;


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

let fishCount = 0;
let fishWeight = 0;
let fishMoney = 0;



console.log(' ');
console.log('Youve gone fishing! Try to maximize the value of your caught fish. You can fish');
console.log('for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log(' ');
console.log('===============================================================');
console.log(' ');
console.log(' ');
console.log(`The time is ${time}:00. So far you've caught:`);



// Retrieves all caught fish
// for (i = 0; i < caught.length; i++) {
//     console.log('[' + [i]+ '] ' + caught[i].name + ', ' + caught[i].weight + ' lbs' + ', $' + caught[i].money)
// }
console.log(' ');
console.log('===============================================================');








// Generate random fish 
random = Math.floor(Math.random() * fish.length);
fishing = fish[random];
caught.push(fishing);
time += 1;



// Generate random fish 
random = Math.floor(Math.random() * fish.length);
fishing = fish[random];
caught.push(fishing);
time += 1;


// Generate random fish 
random = Math.floor(Math.random() * fish.length);
fishing = fish[random];
caught.push(fishing);
time += 1;



// Updates values
for (const update in caught) {
    fishCount += 1;
    fishWeight += caught[update].weight;
    fishMoney += caught[update].money;
}

console.log(fishCount);
console.log(fishWeight);
console.log('$' + fishMoney);


// while (time > 12) {

//     for (const update in caught) {

//     }





// }















//     console.log('===============================================================');
//     console.log(' ');
//     console.log(`The time is ${time}:00. So far you've caught:`);
//     console.log(`${fish} fish, ${weight} lbs, ${money}`)
//     console.log(' ');
//     console.log('===============================================================');

// }


