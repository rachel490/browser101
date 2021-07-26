const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerText = `${x}px , ${y}px`;
})















// const coord = document.querySelector('span');
// const img = document.querySelector('img');
// const rowLine = document.querySelector('.row');
// const colLine = document.querySelector('.col');


// document.body.addEventListener('mousemove', showCoordinate)

// function showCoordinate(event) {
//     console.log(event.clientX, event.clientY);
//     const x = event.clientX;
//     const y = event.clientY;

//     //text
//     coord.innerText = `(${x}, ${y})`;
//     coord.style.top = `${y+30}px`;
//     coord.style.left = `${x+30}px`;

//     //img
//     img.style.top = `${y}px`;
//     img.style.left = `${x}px`;

//     //col div
//     colLine.style.left = `${x+20}px`;

//     //row div
//     rowLine.style.top = `${y+20}px`
// }