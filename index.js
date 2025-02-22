// let age = 20;
// const PI = 3.14;

// if (age > 18) {
//   console.log("You are an adult!");
// } else {
//   console.log("You are a minor!");
// }

// // for i in range(0,10):
// //  print(i)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// function add(a, b) {
//   return a + b;
// }
// let result = add(2, 3);
// console.log(result);

// const add2 = (a, b) => {
//   return a + b;
// };

// let result2 = add2(5, 3);
// console.log(result2);

const title_heading = document.querySelector("#title");
console.log(title_heading);

const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";

const main = document.querySelector("#main");

const button = document.querySelector("#click-me");

button.addEventListener("click", (event) => {
  event.preventDefault();
  main.appendChild(newElement);
});

const user_section = document.querySelector("#user-data");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      const container = document.createElement("div");
      const name = document.createElement("div");
      const email = document.createElement("div");

      container.style.backgroundColor = "rosybrown";
      container.style.margin = "10px";
      container.style.textAlign = "center";

      name.textContent = user.username;
      email.textContent = user.email;

      container.appendChild(name);
      container.appendChild(email);

      user_section.appendChild(container);
    });
  });
