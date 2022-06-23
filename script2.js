const gamesListEl = document.querySelectorAll(".input-list li");

//---------------------------

// const favouriteEvents = ["100mts", "200mts", "400mts", "Relay"];

// for (let i = 0; i < favouriteEvents.length; i++) {
//   console.log("My Favourite Sports Event is : " + favouriteEvents[i]);
// }

// for (const item of favouriteEvents) {
//   console.log("My Favourite Sports Event is : " + item);
// }

//--------------------------

const sportsItems = [];

for (const item of gamesListEl) {
  sportsItems.push(item.innerText);
}

console.log("SportsItems", sportsItems);

// Spread Operator

// gamesListEl.forEach((value) => {
//   console.log("Sports : ", value);
// });

// (OR)

const newItem = [...gamesListEl].forEach((value) => {
  console.log("Sports : ", value);
});

console.log(newItem);

// Array.from

const newArray = Array.from(gamesListEl).forEach((value) => {
  console.log("sports : ", value);
});
console.log(newArray);
