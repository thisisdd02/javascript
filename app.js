
// create a new button element
const button = document.createElement("button");
// add text to the button
button.innerHTML = "Add Content";
// add the button to the document
document.body.appendChild(button);
// add an event listener to the button
button.addEventListener("click", () => {
  // create a new paragraph element
  const paragraph = document.createElement("p");
  // add text to the paragraph
  paragraph.innerHTML = "This is some new content!";
  // get the paragraph element with the id "content"
  const content = document.getElementById("content");
  // add the new paragraph after the existing paragraph
  content.parentNode.insertBefore(paragraph, content.nextSibling);
});