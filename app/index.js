const canvas = document.getElementById('game');

class Arena {
    constructor() {
        this.options = null;
    }
}

class Sound {
    constructor() {
        this.options = null;
    }
}

class Npc {
    constructor() {
        this.options = null;
    }
}

class Map {
    constructor() {
        this.options = null;
    }
}

class Equipment {
    constructor() {
        this.options = null;
    }
}

class Guild {
    constructor() {
        this.options = null;
    }
}

class Events {
    constructor() {
        this.options = null;
    }
}

class Player {
    constructor() {
        this.options = null;
    }
}

class User {
    constructor() {
        this.options = null;
    }

    async setUserOptions() {

        try {
            const options = await fetch("");
            if(options.data) {
                this.options = options.data;
            }

        } catch (err) {
            console.error(err);
        }
    };
}

class Auth {
    constructor() {
        this.token = null;
        this.auth = null;
        this.session = null;
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.auth = new Auth();
        this.user = new User();
        this.player = new Player();
        this.events = new Events();
        this.equipment = new Equipment();
        this.map = new Map();
        this.npc = new Npc();
        this.sounds = new Sound();
        this.guild = new Guild();
        this.arena = new Arena();
    }
}

const game = new Game(canvas);
console.log(game);