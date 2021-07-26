const specialBox = document.querySelector('.special-box');

specialBox.addEventListener('click', onSpecialBoxClick)

function onSpecialBoxClick (event) {
    const specialRec = specialBox.getBoundingClientRect()
    console.log(specialRec);
    console.log(`client: ${event.clientX}, ${event.clientY}`);
    console.log(`page: ${event.pageX}, ${event.pageY}`);
}   


const scrollBy = document.querySelector('.scroll-by');
const scrollTo = document.querySelector('.scroll-to');
const scrollInto = document.querySelector('.scroll-into');

scrollBy.addEventListener('click', () =>  {
    //window.scrollBy(0,100);
    window.scrollBy({top: 300,left: 0, behavior:'smooth'})
});


scrollTo.addEventListener('click', () =>  {
    window.scrollTo(20,200);
});


scrollInto.addEventListener('click', () =>  {
    specialBox.scrollIntoView();
});

