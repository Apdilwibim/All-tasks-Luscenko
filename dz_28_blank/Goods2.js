class Goods2 extends Goods {
    constructor(a, b, c, d, e, sale) {
        super(a, b, c, d, e);
        this.sale = sale;
    }

    draw() {
        super.draw();
        if (this.sale == true) {
            let salePrice = document.createElement('div');
            salePrice.style.color = 'red';
            salePrice.textContent = 'sale 40%';
            document.querySelector('.out-6').appendChild(salePrice);
        }
    }
}