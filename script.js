var page = document.body;

function initMove() {

    page.addEventListener("mousemove", function (event) {
        
        const moveX = event.clientX - page.offsetLeft;
        const moveY = event.clientY - page.offsetTop;

        document.querySelector(".wrapper").style.setProperty("--x", `${moveX}px`);
        document.querySelector(".wrapper").style.setProperty("--y", `${moveY}px`);
  }, false);
}

initMove();