class Valid2 extends Valid {
    constructor(a, b) {
        super(a, b);
        this.emailError = '';
        this.passwordError = '';
    }

    validate() {
        super.validate();
        if(this.email == '') {
            this.emailError = 'email empty';
        }
        if(this.isValid == false) {
            this.passwordError = 'min length 6';
        }
    }

}