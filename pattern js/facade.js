//структурный паттерн, который предоставляет простой 
//интерфейс к сложной системе классов, библиотек, фреймворков


//пользователь взаимодействует толькo с этим классом
class Order {
    constructor(order) {
        this.order = order;
        this.status = 'received';

        KitchenTask.createTask(this);
    }

}

class KitchenTask {
    constructor(task) {
        this.task = task;
        task.status = 'preparing';
    }

    static createTask(task) {
        const kTask = new KitchenTask(task);

        setTimeout(() => {
            DeliveryTask.createTask(kTask)
        }, 3000);
    }
}

class DeliveryTask {
    constructor(task) {
        this.task = task;
        task.task.status = 'in delivery';
    }

    static createTask(task) {
        const dTask = new DeliveryTask(task);
        console.log(dTask);

        setTimeout(() => {
            dTask.task.status = 'complete';
            console.log(dTask);

        }, 3000);
    }
}