let display = document.querySelector(".input");
// let digit = document.querySelector(".bracket_open");
// digit.addEventListener("click", () => {
//   display.value += digit.value;
// });
function add_to_display(value) {
  display.value += value;
}
function cl() {
  display.value = "";
}
function del() {
  display.value = display.value.substring(0, display.value.length - 1);
}
function solve() {
  // display.value += value;
  // display.value = display.value + display.value;
  let x = display.value;
  let y = eval(x);
  display.value = y;
  return y;
}
