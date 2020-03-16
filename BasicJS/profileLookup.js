// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  const keys = Object.keys(contacts[0]);
  const objNames = [];
  for (let i = 0; i < contacts.length; i++) {
    objNames.push(contacts[i]["firstName"]);
  }
  for (let i = 0; i < objNames.length; i++) {
    for (let j = 0; j < objNames.length; j++) {
      // console.log(i + " " +j);
      if (name == objNames[i] && prop == keys[j]) {
        console.log(contacts[i][prop]);
        return contacts[i][prop];
      }
    }
  }
  for (let i = 0; i < objNames.length; i++) {
    for (let j = 0; j < objNames.length; j++) {
      // console.log(i + " " +j);
      if (name !== objNames[i] && prop == keys[j]) {
        console.log("No such contact");
        return "No such contact";
      }
    }
  }
  for (let i = 0; i < objNames.length; i++) {
    for (let j = 0; j < objNames.length; j++) {
      // console.log(i + " " +j);
      if (name == objNames[i] && prop !== keys[j]) {
        console.log("No such property");
        return "No such property";
      }
    }
  }
  for (let i = 0; i < objNames.length; i++) {
    for (let j = 0; j < objNames.length; j++) {
      // console.log(i + " " +j);
      if (name !== objNames[i] && prop !== keys[j]) {
        console.log("No such property");
        return "No such contact";
      }
    }
  }

  // Only change code above this line
}

lookUpProfile("Akira", "number");
