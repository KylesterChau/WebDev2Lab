"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 5
const brokenMissingNameUsers = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];
// broken test data for exercise 6

const namesList = document.getElementById("names-list");
const youngCharactersList = document.getElementById("young-characters-list");
const renderingCharactersList = document.getElementById("function-list");
// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.forEach((user) => {
  const listItem = document.createElement("li");

  console.log(user.name);

  listItem.textContent = user.name;
  namesList.appendChild(listItem);
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
users.forEach((user) => {
  if (user.age < 40) {
    const listItem = document.createElement("li");
    console.log(user.name);

    listItem.textContent = user.name;
    youngCharactersList.appendChild(listItem);
  }
});
// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
displayListNames(users, "function-list");
function displayListNames(array, elementID, errorElementID) {
  const namesList = document.getElementById(elementID);
  const errorMessageDiv = document.getElementById(errorElementID);
  array.forEach((user) => {
    if (!user.name) {
      const newErrorMessage = document.createElement("p");
      console.error("Error: Object is missing 'name' property", user);
      newErrorMessage.textContent = `Error: Object at index ${user.id - 1}  is missing "name" property`;
      newErrorMessage.classList.add("error-message");
      errorMessageDiv.appendChild(newErrorMessage);
      return;
    }
    else {
      const listItem = document.createElement("li");

      console.log(user.name);

      listItem.textContent = user.name;
      namesList.appendChild(listItem);
    }
  });
};
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
displayYoungCharacters(users, 100, "age-filter-list");
function displayYoungCharacters(array, ageThreshold, elementID) {
  const youngCharactersList = document.getElementById(elementID);
  array.forEach((user) => {
    if (user.age < ageThreshold) {
      const listItem = document.createElement("li");
      console.log(user.name);

      listItem.textContent = user.name;
      youngCharactersList.appendChild(listItem);
    }
  });
}
// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
displayListNames(users, "error-handling-list", "error-messages");
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
displayListNames(brokenMissingNameUsers, "broken-array-list", "broken-array-errors");