const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// Const for user UI
const userUl = document.getElementById("users");

// Own function to add header to UI
function headerUi() {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
}

// Create UI
const createTableUI = (users) => {
  headerUi()
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// Search by name
const nameSearch = document.getElementById("name");

nameSearch.addEventListener("keyup", () => {
  let name = nameSearch.value;
  headerUi();
  
  const userFilteredByName = users.filter(user =>
    user.name.toLocaleLowerCase().includes(String(name).toLocaleLowerCase()));

  for (const user of userFilteredByName) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
});

// Filter by min. age
const filterBtn = document.getElementById("filter")

filterBtn.addEventListener("click", () => {
  const ageInput = document.getElementById("age").value;

  headerUi();
  const userFilteredAge = users.filter(user => (user.age >= Number(ageInput)));

  for (const user of userFilteredAge) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
});

const main = () => {
  createTableUI(users);
};

main();


