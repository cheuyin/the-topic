const topicInput = document.querySelector("#the-topic");
const htmlBody = document.querySelector("body");
const labels = document.querySelectorAll("label");

topicInput.addEventListener("change", function() {
  document.title = this.value;
})

const bgColor = document.querySelector("#bg-color");
bgColor.addEventListener("change", function() {
  htmlBody.style.backgroundColor = this.value;
})

const textColor = document.querySelector("#text-color");
textColor.addEventListener("change", function() {
  topicInput.style.color = this.value;
  labels.forEach(label => {
    label.style.color = this.value;
  })
})