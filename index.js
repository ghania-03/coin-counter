let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let totalCoin = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function total() {
  totalCoin += count;
  totalEl.textContent = "Total: " + totalCoin;
  countEl.textContent = 0;
  count = 0;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
}
