var app = {
    init() {
        console.log("animate Ready");

        this.dot = document.querySelector('#dot');
        this.dotAnimate();
    },
    dotAnimate() {
        console.log();
        window.onmousemove = e => {
            let posX = e.clientX;
            let posY = e.clientY;
            let cont = this.dot.parentElement.getBoundingClientRect();
            let dot = this.dot.getBoundingClientRect();
            console.log(posX,posY,cont);
            if(( posX > cont.x && posX + dot.width < cont.x + cont.width ) && 
                ( posY > cont.y && posY + dot.height < cont.y + cont.height )) {
                this.dot.animate({
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`
                },{duration: 800,fill: 'forwards'})
            }            
        }
    },
}

app.init();