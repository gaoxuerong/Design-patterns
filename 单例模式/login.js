class Login {
    constructor() {
        this.instance = null
        this.init()
    }
    init() {
        document.querySelector('.mask').style = 'display: block';
    }
    static querySlect(options) {
        return document.querySelector(options);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Login()
        } else {
            document.querySelector('.mask').style = 'display: none';
        }
        return this.instance
    }
}
Login.querySlect('.login-btn').addEventListener('click', function () {
    Login.getInstance()
})