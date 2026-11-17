function changeTheme() {
  let theme = document.querySelector(".theme");
  theme.classList.toggle("dark-theme");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function displaySubmissionMessage(event) {
  event.preventDefault();
  let submissionMessage = document.querySelector(".submission-message");
  let name = document.querySelector("#name");
  let workshop = document.querySelector("#workshop-dropdown");
  let workshopName = workshop.selectedOptions[0].textContent;
  let numberOfPlaces = document.querySelector("#number-of-places");
  let places = numberOfPlaces.value;

  submissionMessage.textContent = `Thanks for your interest in ${workshopName}, ${name.value}. Places requested: ${places}. This is a demo, so your enquiry has not been sent. Have a great day!`;
}

function clearSubmissionMessage(event) {
  let submissionMessage = document.querySelector(".submission-message");
  submissionMessage.textContent = "";
}

let interestFormSubmit = document.querySelector(".interest-form");
interestFormSubmit.addEventListener("submit", displaySubmissionMessage);
interestFormSubmit.addEventListener("input", clearSubmissionMessage);
