const slider = document.querySelector("#slider");
const slidervalue = document.querySelector(".slidervalue");
const black = document.querySelector(".black");
const eraser = document.querySelector(".eraser");
const rgb = document.querySelector(".rgb");
const clear = document.querySelector(".clear");
const colorpicker = document.querySelector("#colorpicker");

slider.addEventListener("change", () => {
  let size = slider.value;
  let screen = document.querySelector(".boardscreen");
  screen.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");

      column.appendChild(row);

      colorpicker.addEventListener("input", function () {
        row.addEventListener("mouseover", () => {
          row.style.backgroundColor = colorpicker.value;
        });
      });

      black.addEventListener("click", () => {
        row.addEventListener("mouseover", () => {
          row.style.backgroundColor = "black";
        });
      });

      eraser.addEventListener("click", () => {
        row.addEventListener("mouseover", () => {
          row.style.backgroundColor = "white";
        });
      });

      rgb.addEventListener("click", () => {
        row.addEventListener("mouseover", () => {
          row.style.backgroundColor = randomColor();
        });
      });

      clear.addEventListener("click", () => {
        row.style.backgroundColor = "white";
      });
    }
    screen.appendChild(column);
  }
});

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(",") + ")";
}

slider.oninput = function () {
  slidervalue.innerHTML = this.value + ` x ${this.value}`;
};

colorpicker.oninput = (e) => setcurrentcolor(e.target.value);
function setcurrentcolor(newcolor) {
  row.addEventListener("mouserover", () => {
    row.style.backgroundColor = newcolor;
  });
}
