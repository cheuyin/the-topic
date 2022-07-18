const topicInput = document.querySelector("#the-topic");
const htmlBody = document.querySelector("body");

const bgColor = document.querySelector("#bg-color");
bgColor.addEventListener("change", function() {
  htmlBody.style.backgroundColor = this.value;
})