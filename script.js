const formInput = document.getElementById("email");
const userInput = formInput.value;
const errorMessage = document.querySelector(".error-message");
const form = document.getElementById("form");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  if (!formInput.value.match(emailRegex)) {
    e.preventDefault();
    errorMessage.innerHTML = "Please provide a valid email address";
    formInput.classList.add("border-[#ff0000]");
  }
});
