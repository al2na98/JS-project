//наследование

class Player {

    static totalPlayers = 0; // static - мы создаем свойство, которое не наследуется
	
    constructor(login, score = 100) {
		this.login = login;
		this.score = score;
		Player.totalPlayers ++;
	}
	increaseScore(num = 10) {
		this.score += num;
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


const players = [];

players[0] = new Player('tor');
players[1] = new Player('user', 200);
players[2] = new PaidPlayer('user2', 100, 10000);
players[3] = Player.create('user3');

console.log(players.sort(Player.sortByScore));

// class PaidPlayer {
// 	constructor(login, score = 100, accBalance = 1000) {
// 		this.login = login;
// 		this.score = score;
// 		this.accBalance = accBalance;
// 	}
// 	increaseScore(num = 10) {
// 		this.score += num;
// 	}

// 	decreaseScore(num = 10) {
// 		this.score -= num;
// 	}

//     increaseBalance(amount = 0) {
//         this.accBalance += amount;
//     }
// }

//снизу тот же класс, что и сверху, но занимает меньше памяти

//класс расширяется за счёт другого (extends Player)
class PaidPlayer extends Player{
    static totalPlayers = 0;

	constructor(login, score = 100, accBalance = 1000) {
        super(login, score); //ссылается на родительский класс (вызов конструктора(constructor))
		this.accBalance = accBalance;
        PaidPlayer.totalPlayers ++;
	}

    increaseBalance(amount = 0) {
        this.accBalance += amount;
    }
}

//наследует методы PaidPlayer, который наследует Player
class SuperPaidP extends PaidPlayer{

}

const pp1 = new PaidPlayer('stark', 90, 10000)