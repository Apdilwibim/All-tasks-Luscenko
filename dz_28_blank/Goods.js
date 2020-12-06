class Goods {
    constructor(a,b,c,d,e) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
        this.classOut = e;

    }

    draw() {
        let out = document.querySelector(`.${this.classOut}`);
        out.style.textAlign = 'center';
        let img = document.createElement('img');
        img.src = this.image;
        img.style.width = `100px`;
        out.appendChild(img);
        out.innerHTML += `<br>${this.name} <br> ${this.amount}`;
    }
}