characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  //1-Get first name that has blue eyes.
  let firstname = characters.find((e) => {
    return e.eye_color== "blue";
})
console.log(firstname.name);
//2-Get first gender that is his mass is over 50
let firstgender = characters.find((e) => {
    return e.mass > 50;
})
console.log(firstgender.gender);
//3-Get characters with height less than 200
console.log(characters.filter((e) => {
    return e.height < 200;
}));
//4-Get all male characters
console.log( characters.filter((e) => {
    return e.gender == "male";
}));

//5-Get array of all names only
console.log(characters.map((e) => {
    return e.name;
}));
//6-Get array of all heights only
console.log(characters.map((e) => {
    return e.height;
}));

//7-Sort by mass (low to high)
console.log(characters.sort((a,b) => {
    return a.mass- b.mass;
}));
//8-Sort by height (high to low)
console.log(characters.sort((a,b) => {
    return b.height- a.height;
}));
//9-Does every character have mass more than 40?
console.log(characters.every((e) => {
    return e.mass<40;
}));
//10-Is every character shorter than 200?
console.log(characters.every((e) => {
    return e.height<200;
}));
//11-Is there at least one character with blue eyes?
console.log(characters.some((e) => {
    return e.eye_color=="blue";
}));
//12-Is there at least one character taller than 210?
console.log(characters.some((e) => {
    return e.height>210;
}));