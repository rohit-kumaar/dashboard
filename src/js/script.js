// Header email section dropdown start
function show(anything) {
  document.querySelector(".textBox").value = anything;
}

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
// Header email section dropdown end

// Single Page Start
function showPage(page) {
  document.querySelectorAll(".dashboard-body__left article").forEach((div) => {
    div.style.display = "none";
  });

  document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dashboard__left  ul li").forEach((li) => {
    li.onclick = function () {
      showPage(this.dataset.page);
    };
  });
});
// Single Page End
