const canvas = document.getElementById('game');

// Hooks
const useCookie = (name) => {
    return {
        value: document.cookie.split('; ').find(row =>
            row.startsWith(name + '='))?.split('=')[1] || null,
    }
}

const useSessionStorage = (key) => ({

    get value() {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },

    set value(newValue) {
        sessionStorage.setItem(key, JSON.stringify(newValue));
    },

    remove() {
        sessionStorage.removeItem(key);
    },
});


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
    constructor(playerName, token) {
        this.options = this.setMapOptions("kartuga").then();
        this.playerName = playerName;
    }

    async setMapOptions(playerName) {

        const { value: token } = useCookie("token");
        const user = useSessionStorage("user");
        user.value = {
            name: playerName,
            date: "2020-01-01",
        }
        console.log(token, user.value);

        try {

            const map = await fetch("", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${playerName}`
                }
            });

        } catch (err) {
            console.error(err);
        }
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