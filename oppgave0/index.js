// Oppgave 1
const pRemove = document.getElementById("remove");
const removeBtn = document.querySelector('#remove-btn');

removeBtn.addEventListener("click", () => pRemove.remove());

// Oppgave 2
const pChange = document.getElementById("change");
const changeBtn = document.querySelector('#change-btn');

changeBtn.addEventListener("click", () => pChange.innerHTML = "Ny tekst.. bla bla bla....");

// Oppgave 3
const inputText = document.getElementById("input-text");

const input = document.getElementById("input");

input.addEventListener("input", () => {
  inputText.innerHTML = input.value;
  if (inputText.innerHTML === "") {
    inputText.innerHTML = "Tomt, skriv noe";
  }
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const writeListBtn = document.getElementById("write-list");
const ul = document.querySelector("#ul");

writeListBtn.addEventListener("click", () => {
  for (let item of myList) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  }
});
// Oppgave 5
const selectTag = document.getElementById("select");
const textToElement = document.getElementById("text");
const createElementBtn = document.getElementById("create");

createElementBtn.addEventListener("click", () => {
  let createElement = document.createElement(selectTag.value);
  createElement.innerHTML = textToElement.value;
  document.getElementById("placeholder").appendChild(createElement);
})

// Oppgave 6
const unorderedList = document.getElementById("list");
const removeLiButton = document.getElementById("remove-li");

removeLiButton.addEventListener("click", () => {
  if (unorderedList.childElementCount > 0) {
    unorderedList.removeChild(unorderedList.children[0]);
  }
});

// Oppgave 7
const nameInput = document.getElementById("name");

function disable() {
  const buttonToDisable = document.getElementById("order");

  if (nameInput.value.length > 4) {
    buttonToDisable.disabled = true;
    buttonToDisable.style.border = "1px solid red";
  } else {
    buttonToDisable.disabled = false;
    buttonToDisable.style.border = "1px solid black";
  }
}

nameInput.addEventListener("input", disable);


// Oppgave 8
const ulTask8 = document.querySelector(".children");

document.getElementById("color").addEventListener("click", () => {
  for (let i = 0; i < ulTask8.childElementCount; i++) {
    i % 2 
    ? ulTask8.children[i].style.border = "3px solid pink" 
    : ulTask8.children[i].style.border = "3px solid green";
  }
}) 