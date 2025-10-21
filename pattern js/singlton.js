//паттерн, гарантирующий, что у класса есть только один экземпляр, и предоставляющий к нему глобальную точку доступа

class User {
    constructor(login, email) {
        this.login = login;
        this.email = email;
    }
}

class Editor extends User{
    constructor(login, email) {
        super(login, email)
    }
    createPost(title, text) {

    }
}

class Admin extends User {
    static exists = false;
    static instance = null; //экземпляр

    constructor(login, email) {
        if (Admin.exists) {
            return Admin.instance
        }

        super(login, email);
        Admin.exists = true;
        Admin.instance = this;
    }
}