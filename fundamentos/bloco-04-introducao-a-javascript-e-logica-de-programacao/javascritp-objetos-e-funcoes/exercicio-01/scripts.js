// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// };

// console.log(player.name);
// console.log(player.lastName);
// console.log(player['age']);
// console.log("A jogadora Marta Silva foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");
// console.log("A jogadora possui " + player.medals['golden'] + ' de ouro e ' + player.medals['silver'] + ' de prata.')

//02
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let key in names){
    console.log('Olá', names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car){
      console.log(key, car[key]);
  };