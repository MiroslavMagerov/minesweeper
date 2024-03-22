class Casilla {
    #x;
    #y;
    #bombsAround;
    #flag;
    #bomb;
    #revealed; 

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bombsAround = 0;
        this.flag = false;
        this.bomb = false;
        this.revealed = false;
    }

    get x() {
        return this.#x;
    }
    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }
    set y(y) {
        this.#y = y;
    }

    get bombsAround() {
        return this.#bombsAround;
    }
    set bombsAround(bombs) {
        this.#bombsAround = bombs;
    }

    get flag() {
        return this.#flag;
    }
    set flag(flag) {
        this.#flag = flag;
    }

    get bomb() {
        return this.#bomb;
    }
    set bomb(bomb) {
        this.#bomb = bomb;
    }

    get revealed() {
        return this.#revealed;
    }
    set revealed(revealed) {
        this.#revealed = revealed;
    }
}