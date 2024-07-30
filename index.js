class Auth {
    constructor(login, password, email, phone, location) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.userId = this.generateUserId();
        this.dateOfRegistration = this.generateUserRegDate();
        this.isLoggedIn = true;
        this.user = new User(email, location, this.userId);
    }

    isAuthenticated() {}

    generateUserId() {

        return "cwccecwe";
    }

    generateUserRegDate() {
        return '11-17-1999';
    }

    async signUp(login, password) {

        try {
            const response = await fetch("", {});
            return true;

        } catch (err) {
            console.log(err);
        }
    };

    async signIn() {

        try {
            const response = await fetch("", {});
            return true;

        } catch (err) {
            console.log(err);
        }
    };

    async signOut() {

        try {
            const response = await fetch("", {});
            return true;

        } catch (err) {
            console.log(err);
        }
    };

}

class User {
    constructor(email, location, userId) {
        this.email = email;
        this.location = location;
        this.userId = userId;
        this.language = 'en-US';
        this.nickname = 'cezar42';
        this.birthDate = '11-11-1999';
        this.game = new Game(
            this.userId,
            this.nickname,
            this.language,
            this.birthDate,
        );
    }

}

class Game {
    constructor(userId, nickname, language, birthDate) {
        this.userId = userId;
        this.nickname = nickname;
        this.language = language;
        this.birthDate = birthDate;
        this.player = {
            coords: {
                map: 'first',
                x: 11,
                y: 11,
            },
            lvl: { number: 1, amount: 0 },
            money: { gold: 10000, diamond: 0, peso: 0 },
            status: { guild: null, friend: null },
            stuff: {
                ships: [
                    {
                        name: 'slup',
                        hp: 4000,
                        speed: { move: 10, attack: 10 },
                        protectionLvl: 1,
                        attackRange: 20,
                        canobles: {
                            slots: 15,
                            equpted: [],
                        },
                        harpoons: {
                            slots: 8,
                            equpted: [],
                        },
                        abilities: [
                            {
                                name: 'miss',
                                lvl: 1,
                            }
                        ]
                    }
                ],
                eqiupment: {
                    cannons: [
                        {
                            name: 'cannon-8',
                            attackSpeed: 10,
                            attackRange: 100,
                            hp: 1000,
                            amount: 10,
                        }
                    ],
                    harpoons: [
                        {
                            name: 'harpoon-8',
                            attackSpeed: 10,
                            attackRange: 100,
                            hp: 1000,
                            amount: 10,
                        }
                    ],
                    fastResources: [],
                    longResources: [],
                }
            },
        };
        this.events = new Events();
        this.chat = new Chat();
        this.map = new Map(this.player.coords.map);
        this.npc = new Npc();
        this.arena = new Arena();
    }
}

class Chat {
    constructor() {
    }
}

class Map {
    constructor(actualMap) {
        this.actualMap = actualMap;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    generateMap() {};
}

class Arena {
    constructor() {
    }
}

class Npc {
    constructor() {}
}

class Events {
    constructor() {}
}

console.log(new Auth(
    'Martin',
    'akula121319',
    'ammaticay@gmail.com',
    '+37065866504',
    'Lithuania',
));