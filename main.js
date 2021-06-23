
const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');

let time = 6;


fish = ([
    {name: 'Blue fish', weight: 0.43, money: 0.47},
    {name: 'Silver fish', weight: 0.23, money: 0.17},
    {name: 'Gray fish', weight: 0.11, money: 0.87},
    {name: 'Red fish', weight: 0.82, money: 0.24},
    {name: 'Yellow fish', weight: 1.43, money: .99},
]);

let stats = {
    fishCount: 0,
    fishWeight: 0,
    fishMoney: 0
}

let caught = [];
let random = Math.floor(Math.random() * fish.length);
let fishing = fish[random];




console.log(' ');
console.log('Youve gone fishing! Try to maximize the value of your caught fish. You can fish');
console.log('for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log(' ');

// Retrieves all caught fish
// for (i = 0; i < caught.length; i++) {
//     console.log('[' + [i]+ '] ' + caught[i].name + ', ' + caught[i].weight + ' lbs' + ', $' + caught[i].money)
// }





// console.log('===============================================================');





// Generate random fish 
// random = Math.floor(Math.random() * fish.length);
// fishing = fish[random];
// caught.push(fishing);
// time += 1;

// Updates values
// for (const update in caught) {
//     fishCount += 1;
//     fishWeight += caught[update].weight;
//     fishMoney += caught[update].money;
// }




while (time < 12) {

    console.log(' ');
    console.log('===============================================================');
    console.log(' ');
    console.log(`The time is ${time}:00. So far you've caught:`);
    console.log(`${stats.fishCount} fish, ${stats.fishWeight} lbs, $${stats.fishMoney}`);
    console.log(' ');
    console.log('===============================================================');
    console.log(' ');
    random = Math.floor(Math.random() * fish.length);
    fishing = fish[random];
    console.log(' ');
    console.log('You\'ve just caught a:');
    console.log(`${fishing.name}, ${fishing.weight} lbs, $${fishing.money}`)
    time += 1;
    console.log(' ');
    console.log('Your action: [c]atch or [r]elease?');
    console.log(' ');
    let action = prompt();

    if (action == 'c') {
        caught.push(fishing);

        for (const update in caught) {
            stats.fishCount = caught.length;
            stats.fishWeight += caught[update].weight;
            stats.fishMoney += caught[update].money;
        }
    }

    if (action == 'r') {
        console.log(' ');
        console.log('You chose to release the fish');
    }



}


    console.log(' ');
    console.log('The time is 12:00pm. Times up!');
    console.log(' ');
    console.log(`You caught ${stats.fishCount} fish:`);
    console.log('------------------------------------');
    console.log(' ');
    for (i = 0; i < caught.length; i++) {
            console.log('[' + [i + 1]+ '] ' + caught[i].name + ', ' + caught[i].weight + ' lbs' + ', $' + caught[i].money)
        } 
    console.log(' ');
















//     console.log('===============================================================');
//     console.log(' ');
//     console.log(`The time is ${time}:00. So far you've caught:`);
//     console.log(`${fish} fish, ${weight} lbs, ${money}`)
//     console.log(' ');
//     console.log('===============================================================');

// }


