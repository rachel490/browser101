const list = document.querySelectorAll('.window_item span');



window.addEventListener('resize', showsize)

function showsize() {
    list[0].innerText = `${window.screen.width} X ${window.screen.height} `;
    list[1].innerText = `${window.outerWidth} X ${window.outerHeight} `;
    list[2].innerText = `${window.innerWidth} X ${window.innerHeight} `;
    list[3].innerText = `${document.documentElement.clientWidth} X ${document.documentElement.clientHeight}`;
}