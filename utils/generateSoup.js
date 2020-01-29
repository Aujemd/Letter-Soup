class GenerateSoup {

    constructor() {
        this.sizeBoard = 0
        this.words = []
        this.board = []
        this.limitWords = 0
    }

    getWords() {
        return this.words
    }

    getLimit() {
        return this.limitWords
    }

    setLevel(level) {
        this.sizeBoard = 0
        switch (level) {
            case 1:
                this.sizeBoard = 7
                this.limitWords = 6
                break
            case 2:
                this.sizeBoard = 8
                this.limitWords = 8
                break
            case 3:
                this.sizeBoard = 9
                this.limitWords = 10
                break
            case 4:
                this.sizeBoard = 10
                this.limitWords = 12
                break
            case 5:
                this.sizeBoard = 11
                this.limitWords = 14
                break
            case 6:
                this.sizeBoard = 12
                this.limitWords = 16
                break
            default:
                break
        }
        this.words = ['SAL', 'CARNE', 'POLLO', 'MANI', 'PAN', 'PEZ', 'ARROZ', 'UVA', 'HARINA', 'PAPA', 'PERA', 'PASTA', 'MAIZ', 'DONA', 'LECHE', 'AJO']
        this.board = []
    }

    putHorizontalWords(word, pos) {

        let free = true

        let i = pos

        let j = 0



        do {
            if (i < this.sizeBoard * this.sizeBoard) {
                if (this.board[i].letter !== '*' && this.board[i].letter !== word[j]) {
                    free = false
                }

            } else {
                free = false;
                break;
            }

            i++
            j++

        } while (j < word.length)

        i = pos

        let limit

        for (let i = 1; i < this.sizeBoard; i++) {

            limit = i * this.sizeBoard

            if (limit > pos) {
                break
            }
        }

        if (limit - pos < word.length) {
            free = false
        }

        if (free) {
            j = 0

            do {
                this.board[i] = {
                    letter: word[j],
                    specialIn: true,
                }
                i++
                j++
            } while (j < word.length);

            return this.board

        } else {
            return free
        }
    }

    putVerticalWords(word, pos) {

        let i = pos
        let j = 0
        let free = true

        do {
            if (i + j * this.sizeBoard < this.sizeBoard * this.sizeBoard) {


                if (this.board[i + j * this.sizeBoard].letter !== '*' || i + j * this.sizeBoard > this.sizeBoard * this.sizeBoard) {
                    if (this.board[i + j * this.sizeBoard].letter !== word[j]) {
                        free = false
                    }
                }


            } else {
                free = false;
                break;
            }

            j++
        } while (j < word.length);

        j = 0

        if (free) {
            do {
                this.board[i + j * this.sizeBoard] = {
                    letter: word[j],
                    specialIn: true,
                }

                j++
            } while (j < word.length);

            return this.board

        } else {
            return free
        }
    }

    putDiagonalWords(word, pos, mainDiagonal) {

        let free = true
        let i = pos
        let j = 0

        if (mainDiagonal) {

            do {
                if (i + j * this.sizeBoard + j < this.sizeBoard * this.sizeBoard) {

                    if (this.board[i + j * this.sizeBoard + j].letter !== '*' && this.board[i + j * this.sizeBoard + j].letter !== word[j]) {
                        free = false
                    }

                } else {
                    free = false;
                    break;
                }

                j++
            } while (j < word.length);

            j = 0

            let limit

            for (let i = 1; i < this.sizeBoard; i++) {

                limit = i * this.sizeBoard

                if (limit > pos) {
                    break
                }
            }

            if (limit - pos < word.length) {
                free = false
            }

            if (free) {
                do {
                    this.board[i + j * this.sizeBoard + j] = {
                        letter: word[j],
                        specialIn: true,

                    }
                    j++
                } while (j < word.length);

                return this.board
            } else {
                return free
            }

        } else {

            if (pos < this.sizeBoard) {
                free = false
            }

            do {
                if (i + j * this.sizeBoard - j < this.sizeBoard * this.sizeBoard) {

                    if (this.board[i + j * this.sizeBoard - j].letter !== '*' && this.board[i + j * this.sizeBoard - j].letter !== word[j]) {
                        free = false
                    }

                }else {
                    free = false;
                    break;
                }

                j++
            } while (j < word.length);

            j = 0

            let limit

            for (let i = 1; i < this.sizeBoard; i++) {

                if (i * this.sizeBoard > pos) {
                    break
                }

                limit = i * this.sizeBoard

            }

            if (pos + 1 - limit < word.length) {
                free = false
            }

            if (free) {
                do {
                    this.board[i + j * this.sizeBoard - j] = {
                        letter: word[j],
                        specialIn: true,
                    }
                    j++
                } while (j < word.length);

                return this.board

            } else {
                return free
            }

        }
    }

    initializateBoard() {
        for (let i = 0; i < this.sizeBoard * this.sizeBoard; i++) {
            this.board[i] = {
                letter: '*',
                specialIn: false,
            }
        }

    }

    generate() {

        const places = this.sizeBoard * this.sizeBoard - 2

        this.initializateBoard()


        for (let i = 0; i < this.limitWords; i++) {
            let type = Math.floor((Math.random() * 4) + 1)

            switch (type) {
                case 1: {
                    let go
                    do {
                        go = this.putHorizontalWords(this.words[i], Math.floor((Math.random() * places) + 1))
                    } while (go == false)
                    break
                }
                case 2: {
                    let go
                    do {
                        go = this.putVerticalWords(this.words[i], Math.floor((Math.random() * places) + 1))
                    } while (go == false)
                    break
                }
                case 3: {
                    let go
                    do {
                        go = this.putDiagonalWords(this.words[i], Math.floor((Math.random() * places) + 1), true)
                    } while (go == false)
                    break
                }
                case 4: {
                    let go
                    do {
                        go = this.putDiagonalWords(this.words[i], Math.floor((Math.random() * places) + 1), false)
                    } while (go == false)
                    break
                }
                default:
                    break
            }

        }

        return this.board
    }


}

export default new GenerateSoup();