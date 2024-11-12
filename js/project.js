const toggleBtn = document.querySelector(".toggle");
const description = document.querySelector(".description");
let open = false;

toggleBtn.addEventListener("click", (e) => {
  if (open) {
    description.style.left = "55%";
    open = false;
  } else {
    description.style.left = "97%";
    open = true;
  }
});
