//создаёт механизм подписки, позволяющий одним объектам следить 
//и реагировать на события, происходящие в других объектах

class Post {
    constructor(title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;
    }
}
class Editor {
    #observers = []; //приватное свойство. список, кто его наблюдает

    constructor(login, role = "editor") {
        this.login = login;
        this.role = role;
        this.posts = [];
    }

    createPosts(title, subtitle){
        const post = new Post(title, subtitle);

        this.posts.push(post);
        this.notify(post);
    };
    attach(observer){
        const isExists = this.#observers.includes(observer);

        if (isExists) return;

        this.#observers.push(observer);

        console.log('Editor: Atached an observer')
    }; //добавить обозревателя
    detach(observer){
        const observerIndex = this.#observers.indexOf(observer);

        if(observerIndex === -1) {
            return console.log("Observer was not found");
        }

        this.#observers.splite(observerIndex, 1);
        console.log("Editor: detached an observer");
    }; // отписать обозревателя
    notify(posts){
        for (const observer of this.#observers) {
            observer.update(this.login + " published a post" + JSON.stringify(posts))
        }
    }; // уведомление наблюдателей
}
class Admin {
    constructor(login, role = "admin"){
        this.login = login;
        this.role = role;

    }

    update(subject) {
        console.log(subject);
    }
}