//паттерн для создания объектов не напрямую, используя оператор new, а через вызов особого фабричного метода


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
    createPost(title, text) {}
}

class UserCreator {
    static userList = {
        user: User,
        editor: Editor,
        admin: Admin,
    };

    static create(login, email, role = 'user') {
        const Fabric = UserCreator.userList[role];

        const instance = new Fabric(login, email);
        instance.role = role;

        return instance;
    }
}