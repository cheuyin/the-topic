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

const font = document.querySelector("#font");
font.addEventListener("change", function() {
  const selectedFont = font.value;
  htmlBody.style.fontFamily = selectedFont;   
})

const textSize = document.querySelector("#text-size");
textSize.addEventListener("change", function() {
  console.log(topicInput.style.fontSize);
  topicInput.style.fontSize = this.value + "px";
})

// Confirmation before closing tab
window.onbeforeunload = function(e) {
  return 'Are you sure you want to exit?';
};