// const grid = document.createElement('grid');
// grid.style.width = '100px';
// grid.style.height = '200px';
// grid.style.background = 'blue';
// grid.style.color = 'white';
// grid.innerHTML = 'Hello world';
// grid.style.paddingRight = '50px';

// document.body.appendChild(grid).container;

const container = document.querySelector('#container');
let row = container.appendChild(document.createElement('div'));
row.className = 'row';
let box = document.createElement('div');
box.className = 'box';
const color = document.querySelector('box');

function createGrid(boxAmount) {
  for (let i = 0; i < boxAmount; i++) {
    let row = container.appendChild(document.createElement('div'));
    row.className = 'row';
    for (let j = 0; j < boxAmount; j++) {
      let box = document.createElement('div');
      box.className = 'box';
      row.appendChild(box);
    }
  }
}

createGrid(5);

box.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});
