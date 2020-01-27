const words = ['ARROZ', 'HUEVO', 'SAL', 'HARINA', 'PASTA', 'POLLO']
const board = [];
const sizeBoard = 12;

class GenerateSoup{

    putHorizontalWords(word, pos){

        /*let i = 0;

            words.forEach(word => {

                let j = 0 

                do{
                    board[i] = word[j]
                    i++
                    j++
                }while(j <word.length);

                if(word.length < sizeBoard){
                    let add = sizeBoard - word.length
                    let count = 0
                    do{
                        board[i] = 'X'
                        i++
                        count++
                    }while(count < add)
                }
            });

            if(i < sizeBoard * sizeBoard){
                do{
                    board[i] = 'X'
                    i++
                }while(i < sizeBoard * sizeBoard)
            }*/

            let i = pos

            let j = 0 

            do{
                board[i] = word[j]
                i++
                j++
            }while(j <word.length);


        return board;

    }

    putVerticalWords(word, pos){

        
        /*let i = 0

        words.forEach(word => {

            let j = 0 

            do{
                board[i + j * sizeBoard] = word[j]
                j++
            }while(j <word.length);

            i++
        });*/

        let i = pos
        let j = 0
        do{
            board[i + j * sizeBoard] = word[j]
            j++
        }while(j <word.length);

        i++
        
        return board;
    }

    putDiagonalWords(word, pos, mainDiagonal){
        
        /*let i = 0

        words.forEach(word => {

            let j = 0 

            do{
                board[i + j * sizeBoard + j] = word[j]
                j++
            }while(j <word.length);

            i++
        });

        return board;*/

        if(mainDiagonal){
            let i = pos
            let j = 0 
    
            do{
                board[i + j * sizeBoard + j] = word[j]
                j++
            }while(j <word.length);
    
            return board;
        }else{
            let i = pos
            let j = 0 
    
            do{
                board[i + j * sizeBoard - j] = word[j]
                j++
            }while(j <word.length);
    
            return board;
        }
    }

    initializateBoard(){
        for(let i = 0; i < sizeBoard * sizeBoard; i++ ){
            board[i] = '*'
        }
    }

    generate(){
        this.initializateBoard()
        this.putHorizontalWords("ELPO", 37)
        this.putVerticalWords("ELPO", 25)
        this.putDiagonalWords("ELPO", 10, false)
        return board;
    }


}

export default new GenerateSoup();