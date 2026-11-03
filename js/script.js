"use strict";
const input = document.querySelector("#task-input");
const preview = document.querySelector("#task-preview");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-button");
const helpButton = document.querySelector("#help-button");
const helpText = document.querySelector("#help-text");
helpButton.addEventListener("click", () => {
helpText.hidden = !helpText.hidden;
});
input.addEventListener("input", () => {
if (input.value.trim() === "") {
preview.textContent = "Здесь появится ваша задача";
} else {
preview.textContent = input.value;
}
});
form.addEventListener("submit", (event) => {
event.preventDefault();
const title = input.value.trim();
if (title === "") {
message.textContent = "Введите название задачи.";
return;
}
const item = document.createElement("li");
item.className = "task-item";
item.textContent = title;
list.append(item);
input.value = "";
preview.textContent = "Здесь появится ваша задача";
message.textContent = "Задача добавлена!";
});
clearButton.addEventListener("click", () => {
list.replaceChildren();
message.textContent = "Список очищен.";
});
