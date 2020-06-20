(() => {
  console.log("JS works");

  let secondHeader = document.getElementById("header2");
  let thirdHeader = document.getElementById("header3"),
      theButton = document.querySelector("button");

  function changeText() {
    secondHeader.textContent = "Now I'm different";
    thirdHeader.textContent = "I am also different";
  }

  theButton.addEventListener("click",changeText);

})();
