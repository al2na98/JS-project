//метод  dry- don`t repeat yourself

//функция-constructor(конструктор)
function Player(name, score = 100) {
    this.name = name;
    this.score = score;
}


Player.prototype.increaseScore = function(num = 10) {
    this.score += num;
}

Player.prototype.decreaseScorecreaseScore = function(num = 10) {
    this.score -= num;
}

//создание класса, прототипа
// class Player {
// 	constructor(name, score = 100) {
// 		this.name = login;
// 		this.score = score;
// 	}
// 	increaseScore(num = 10) {
// 		this.score += num;
// 	}

// 	decreaseScore(num = 10) {
// 		this.score -= num;
// 	}
// }

const player3 = new Player('tor');
const player4 = new Player('oppa', 200)

//сверху то же, что и снизу, просто занимает меньше места в памяти и можно переиспользовать

const player1 = {
	name: "qwe",
	score: 100,
	increaseScore(num = 10) {
		this.score += num;
	},
	decreaseScore(num = 10) {
		this.score -= num;
	},
};

const player2 = {
	name: "user",
	score: 150,
	increaseScore(num = 10) {
		this.score += num;
	},
	decreaseScore(num = 10) {
		this.score -= num;
	},
};