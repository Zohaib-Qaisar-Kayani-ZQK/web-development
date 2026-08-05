let counter = Number(document.getElementById("counter-number-id").textContent);

document.getElementById("btn-decrease-id").addEventListener("click", () => {
  counter--;
  document.getElementById("counter-number-id").textContent = counter;
});

document.getElementById("btn-increase-id").addEventListener("click", () => {
    counter++;
    document.getElementById('counter-number-id').textContent = counter;
});
