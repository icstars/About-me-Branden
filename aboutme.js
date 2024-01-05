// let input = prompt(`what is your name`);
// let input2 = prompt("what is your age");
// console.log(input);

// alert(
//     "hi my name is " + input + " and i am " + input2 + " years old");

//     let guess = prompt(`guess a number`)
//     while (guess !=3) {
//         guess = prompt('guess a number')
//     }
//     alert('you guessed correctly!')

// first name //
const grabFirstNameInput = document.getElementById("firstNameInput");
console.log(grabFirstNameInput);

// last name //
const grabLastNameInput = document.getElementById("lastNameInput");
console.log(grabLastNameInput);

// birthday //
const grabDateInput = document.getElementById("dateInput");
console.log(grabDateInput);

// enter button //
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("this is the ENTER button");
  console.log(grabFirstNameInput.value);
  console.log(grabLastNameInput.value);
  console.log(grabDateInput.value);

  // how to input it in the paragraph //
  const paragraphElement = document.querySelector(".paragraph");
  console.log(paragraphElement);

  paragraphElement.textContent = `${grabFirstNameInput.value} ${grabLastNameInput.value}. Your application is complete! Thank you for signing up!`;

  // when we click the like button, the paragraph will appear //
  // will say, "${firstName} ${lastName}, you're birthday is ${dateInput}. Thank you for liking."

  console.log(
    `${grabFirstNameInput.value} ${grabLastNameInput.value}. Your application is complete! Thank you for signing up!`
  );

  // clear values //
  grabFirstNameInput.value = "";
  grabLastNameInput.value = "";
  grabDateInput.value = "";
});