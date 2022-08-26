const container = document.querySelector('.container');
const blackButton = document.createElement('button');
const grayButton = document.createElement('button');
const rgbButton = document.createElement('button');
const btnSize = document.createElement('button');
const mainButton = document.querySelector('.buttons');

 function createGrid(col, row){
     for(let i = 0; i < (col * row); i++){
         const div = document.createElement('div');
         div.style = 'border: 1px solid red';
         container.style.gridTemplateColumns = `repeat(${col},1fr)`; 
         container.style.gridTemplateRows = `repeat(${row},1fr)`; 
         container.appendChild(div).classList.add('box');
     };
 };
 createGrid(16,16);

 function colorGray(){
     const boxes = document.querySelectorAll('.box');
     grayButton.innerHTML = 'Gray Color';
     grayButton.addEventListener('click', () => {
         boxes.forEach(box => box.addEventListener('mouseover', () => {
             let random = Math.floor(Math.random() * 255);
             box.style.background = `rgb(${random},${random},${random})`
         }));
     });
     mainButton.appendChild(grayButton).classList.add('btn');
 };
 colorGray();

 function colorBlack(){
    const boxes = document.querySelectorAll('.box');
    blackButton.innerHTML = 'Black Color';
    blackButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }));
    });
    mainButton.appendChild(blackButton).classList.add('btn');
};
colorBlack()

function colorRgb(){
    const boxes = document.querySelectorAll('.box');
    rgbButton.innerHTML = 'Random Color';
    rgbButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 225);
            box.style.background = `rgb(${R},${G},${B})`;
        }));
    });
    mainButton.appendChild(rgbButton).classList.add('btn');
};
colorRgb();


function reset(){
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove())
};

function resize(){
    btnSize.textContent = 'Create your grid size';
    btnSize.addEventListener('click', () => {
        let user =  Number(prompt('How many dimension of Etch-A-Sketch do you want?'));
        if(user === null || user < 1 || user > 100){
            reset();
            createGrid(16,16);
            colorGray();
            colorBlack();
            colorRgb();
        } else {
            reset();
            createGrid(user,user)
            colorGray();
            colorBlack();
            colorRgb();
        };
    });
    mainButton.appendChild(btnSize).classList.add('btn')
}
resize();
