//структурный паттерн проектирования, который позволяет объектам
//с несовместимыми интерфейсами работать вместе

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
    static instance = null;

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
        publisher: Editor,
        admin: Admin,
    };

    static createUser(login, email, role = 'user') {
        const Fabric = UserCreator.userList[role];

        const instance = new Fabric(login, email);
        instance.role = role;

        return instance;
    }
}

class UserAdapter {
    static userList = {
        user: "user",
        editor: "publisher",
        admin: "admin",
    }
    static create(login, email, role = 'user') {
        return UserCreator.createUser(login, email, UserAdapter.userList[role]);
    }
}