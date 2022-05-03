// console.log("this is tutorial 65 - calculator - project 8");

let screen = document.getElementById("screen");

let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log("button text is", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "x²") {
      screenValue = screenValue * screenValue;
      screen.value = screenValue;
    } else if (buttonText == "√x") {
      screenValue = Math.sqrt(screenValue);
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
