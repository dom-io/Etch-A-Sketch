const container = document.querySelector('.container');
const color = document.querySelector('.color');
const sizeSlider = document.querySelector('.size-slider');
const resetbtn = document.querySelector('.reset-btn');
const clearbtn = document.querySelector('.clear-btn');
const colorbtn = document.querySelector('.color-btn');
const eraserbtn = document.querySelector('.eraser-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const sizeSelection = document.querySelector('.size-selection');
// const removeGridlines = document.querySelector('.remove-gridlines');
let size = sizeSlider.value;
let currentColor = 'color';

let btnPick = true;
document.body.onmousedown = () => (btnPick = true);
document.body.onmouseup = () => (btnPick = false);

colorbtn.onmouseover = () => colorStyle('color');
rainbowBtn.onmousedown = () => colorStyle('rainbow');
eraserbtn.onmousedown = () => colorStyle('eraser');
resetbtn.onmousedown = () => resetSketch(size);
// clearbtn.onmousedown = () => clearBtnWipe(size);
// removeGridlines.onclick = () => gridlines();

sizeSlider.onmousemove = (e) => changeSize(e.target.value);
sizeSlider.onchange = (e) => resetPixels(e.target.value);

function changeSize(size) {
  sizeSelection.innerHTML = `${size} x ${size}`;
}

// function gridlines() {
//   container.style.border = 'none';
// }

// function clearBtnWipe(size) {
//   resetPixels(size);
//   sizeSlider.value = size;
// }

function resetPixels(size) {
  clearpixels();
  createGrid(size);
}

function clearpixels() {
  container.innerHTML = '';
}

function resetSketch(size) {
  resetPixels(size);
  sizeSlider.value = 12;
  sizeSelection.textContent = '12 x 12';
}

function colorStyle(newColor) {
  currentColor = newColor;
}

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.addEventListener('mouseover', changeColor);
    div.addEventListener('mouseup', changeColor);
    container.appendChild(div);
  }
}

function changeColor(event) {
  if (event.type !== 'mouseenter' && event.type == 'mousedown') return;
  if (currentColor == 'color') {
    event.target.style.backgroundColor = color.value;
  } else if (currentColor == 'rainbow') {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
  } else if (currentColor == 'eraser') {
    event.target.style.backgroundColor = 'rgba(45,45,45)';
  }
}

createGrid(size);
