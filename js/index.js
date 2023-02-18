window.onload = () => {
    let el = document.getElementsByClassName('mask')[0];
    let left = document.getElementById('left');
    left.addEventListener("click", () => {
        el.scrollLeft -= 500
    })
    let right = document.getElementById('right');
    right.addEventListener("click", () => {
        el.scrollLeft += 500
    })
    el.onmousedown = () => {
        let gapX = event.clientX;
        let startX = el.scrollLeft;
        document.onmousemove = (e) => {
            let x = e.clientX - gapX;
            el.scrollLeft = startX - x;
            return false;
        };
        document.onmouseup = () => {
            console.log("松手");
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    el.addEventListener('mousewheel', (event) => {
        const detail = event.wheelDelta || event.detail;
        let step = 0;
        step = detail < 0 ? 100 : -100
        el.scrollLeft += step;
    }, false)
}