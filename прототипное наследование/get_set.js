class Player {

    static totalPlayers = 0;
    #score; //приватные свойства

    constructor(firstName, lastName, login, score = 100) {
		this.login = login;
		this._score = score; //псевдоприватное свойство
		this.firstName = firstName;
		this.lastName = lastName;
        //this.fullName = this.firstName + ' ' + this.lastName // не будет меняться, если пользователь сменит имя
		Player.totalPlayers ++;
	}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name) {
        const[f,l] = name.split(' ');
        this.firstName = f;
		this.lastName = l;
    }

    get score() { //динамическое получение данных
        return this.#score; //this._score псевдоприватные данные, this.#score - приватное поле
    }

    //приватный метод
    #getScore() {
        return this.#score;
    }

	increaseScore(num = 10) {
		this.#score = this.#getScore() + num;
	}

	decreaseScore(num = 10) {
		this.score -= num;
	}

    static create(login) {
        return new Player(login, 250);
    }

    static sortByScore(a, b) {
        return a.score - b.score;
    }
}

