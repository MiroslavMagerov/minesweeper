class Tablero {
    #size;
    #matrizCasillas;
    #bombs;
    
    constructor(size, quantityBombs) {
        this.size = size;
        this.matrizCasillas = this.generateBoard();
        this.bombs = quantityBombs;
        this.generateBombs();
    }

    get size() {
        return this.#size;
    }

    set size(size) {
        this.#size = size;
    }

    get matrizCasillas() {
        return this.#matrizCasillas;
    }

    set matrizCasillas(matriz) {
        this.#matrizCasillas = matriz;
    }

    get bombs() {
        return this.#bombs;
    }
    set bombs(bombs) {
        this.#bombs = bombs;
    }

    generateBoard() {
        const board = [];
        for (let i = 0; i < this.size; i++) {
            const row = [];
            for (let j = 0; j < this.size; j++) {
                let casilla = new Casilla(i, j);
                row.push(casilla);
            }
            board.push(row);
        }
        return board;
    }

    generateBombs() {
        let bombsGenerated = 0;
        while (bombsGenerated < this.bombs) {
            let x = Math.floor(Math.random() * this.size);
            let y = Math.floor(Math.random() * this.size);
            if (!this.matrizCasillas[x][y].bomb) {
                this.matrizCasillas[x][y].bomb = true;
                bombsGenerated++;
            }
        }
    }

    detectBombs() {
        let bombsCalculated = 0;
        while (bombsCalculated < this.bombs) {
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (this.matrizCasillas[i][j].bomb) {
                        for (let k = i - 1; k <= i + 1; k++) {
                            for (let l = j - 1; l <= j + 1; l++) {
                                if (k >= 0 && k < this.size && l >= 0 && l < this.size) {
                                    if (!this.matrizCasillas[k][l].bomb) {
                                        this.matrizCasillas[k][l].bombsAround++;
                                    }
                                }
                            }
                        }

                        bombsCalculated++;
                    }
                }
            }
        }
    }

    revealAround(cell) {
        let x = cell.x;
        let y = cell.y;
        
        if (cell.bombsAround === 0) {
            for (let i = x - 1; i <= x + 1; i++) {
                for (let j = y - 1; j <= y + 1; j++) {
                    if (i >= 0 && i < this.size && j >= 0 && j < this.size) {
                        if (!this.matrizCasillas[i][j].revealed && !this.matrizCasillas[i][j].bomb && !this.matrizCasillas[i][j].flag) {
                            this.matrizCasillas[i][j].revealed = true;
                            this.revealAround(this.matrizCasillas[i][j]);
                        }
                    }
                }
            }
        }
        else {
            this.matrizCasillas[x][y].revealed = true;
        }
    }
}