class Login{
    static querySlect(options) {
        return document.querySelector(options);
    }
    static getInstance() {
        if(!instance){
            return new Login.getInstance()
        } else {
            return new Login.getInstance()
        }
    }
}
Login.querySlect('.login-btn').addEventListener('click',function(){
    Login.getInstance().show()
})
