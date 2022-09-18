document.getElementById("convert").addEventListener("click", convert);
function convert() {
  let a = parseInt(document.getElementById("numGrade").value);
  let letter;
  if (a >= 0 && a <= 40) {
    letter = "E";
  } else if (a > 40 && a <= 55) {
    letter = "D";
  } else if (a > 55 && a <= 60) {
    letter = "C";
  } else if (a > 60 && a <= 65) {
    letter = "BC";
  } else if (a > 65 && a <= 70) {
    letter = "B";
  } else if (a > 70 && a <= 80) {
    letter = "AB";
  } else if (a > 80 && a <= 100) {
    letter = "A";
  } else {
    alert("Wrong Input!");
  }
  document.getElementById("letterGrade").value = letter;
}
