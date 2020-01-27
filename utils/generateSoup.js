const words = ['ARROZ', 'HUEVO', 'SAL', 'HARINA', 'PASTA', 'POLLO']
const board = [];
const sizeBoard = 12;

class GenerateSoup{

    putHorizontalWords(word, pos){

            let free = true

            let i = pos

            let j = 0

            do{
                if(board[i] !== '*'){
                    free = false
                }
                
                i++
                j++

            }while(j < word.length);

            i = pos

            let limit

            for(let i = 1; i < sizeBoard; i++){
                
                limit = i * sizeBoard 
                
                if(limit > pos){
                    break
                }
            }

            if(limit - pos < word.length){
                free = false
            }

            if(free){
                j = 0

                do{
                    board[i] = word[j]
                    i++
                    j++
                }while(j <word.length);
    
                return board;
            }else{
                return free
            }
    }

    putVerticalWords(word, pos){
        
        let i = pos
        let j = 0
        let free = true

        do{
            if(board[i + j * sizeBoard] !== '*' || i + j * sizeBoard > sizeBoard * sizeBoard){
                free = false
            }
            j++
        }while(j < word.length);

        j = 0

        if(free){
            do{
                board[i + j * sizeBoard] = word[j]
                j++
            }while(j <word.length);
    
            return board;
        }else{
            return free
        }
    }

    putDiagonalWords(word, pos, mainDiagonal){
        let free = true
        let i = pos
        let j = 0
        
        if(mainDiagonal){

            do{
                if(board[i + j * sizeBoard + j] !== '*'){
                    free = false
                } 
                j++
            }while(j <word.length);

            
            j = 0

            let limit

            for(let i = 1; i < sizeBoard; i++){
                
                limit = i * sizeBoard 
                
                if(limit > pos){
                    break
                }
            }

            if(limit - pos < word.length){
                free = false
            }

            if(free){
                do{
                    board[i + j * sizeBoard + j] = word[j]
                    j++
                }while(j <word.length);
        
                return board;
            }else{
                return free
            }

        }else{

            if(pos < sizeBoard){
                free = false
            }

            do{
                if(board[i + j * sizeBoard - j] !== '*'){
                    free = false
                } 
                j++
            }while(j <word.length);

            j = 0
            
            let limit

            for(let i = 1; i < sizeBoard; i++){

                if(i * sizeBoard > pos){
                    break
                }
                
                limit = i * sizeBoard 
    
            }

            if(pos + 1 - limit < word.length){
                free = false
            }

            if(free){
                do{
                    board[i + j * sizeBoard - j] = word[j]
                    j++
                }while(j <word.length);
        
                return board;
            }else{
                return free
            }

        }
    }

    initializateBoard(){
        for(let i = 0; i < sizeBoard * sizeBoard; i++ ){
            board[i] = '*'
        }
    }

    generate(){
        this.initializateBoard()
        this.putDiagonalWords("ELPO", 104, true)
        return board;
    }


}

export default new GenerateSoup();