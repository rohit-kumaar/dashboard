

// Header email section dropdown start
function show(anything) {
  document.querySelector(".textBox").value = anything;
}

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
// Header email section dropdown end
