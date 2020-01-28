const words = ['SAL', 'CARNE', 'POLLO', 'MANI', 'PAN', 'PEZ', 'ARROZ', 'UVA' , 'HARINA', 'PAPA', 'PERA', 'PASTA', 'MAIZ', 'DONA', 'LECHE', 'AJO']
const board = [];
const sizeBoard = 12;

class GenerateSoup{

    putHorizontalWords(word, pos){

            let free = true

            let i = pos

            let j = 0

            do{
                if(board[i] !== '*' && board[i] !== word[j]){
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
                if(board[i + j * sizeBoard] !== word[j]){
                    free = false
                }
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
                if(board[i + j * sizeBoard + j] !== '*' && board[i + j * sizeBoard + j] !== word[j]){
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
                if(board[i + j * sizeBoard - j] !== '*' && board[i + j * sizeBoard - j] !== word[j]){
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
        const places = sizeBoard * sizeBoard

        this.initializateBoard()
        
        words.forEach(word => {

            let type = Math.floor((Math.random() * 4) + 1)

            switch(type){
                case 1:{
                    let go
                    do{
                        go = this.putHorizontalWords(word, Math.floor((Math.random() * places) + 1))
                    }while(go == false)
                    break
                } 
                case 2:{
                    let go
                    do{
                        go = this.putVerticalWords(word, Math.floor((Math.random() * places) + 1))
                    }while(go == false)
                    break
                }
                case 3:{
                    let go
                    do{
                        go = this.putDiagonalWords(word, Math.floor((Math.random() * places) + 1), true)
                    }while(go == false)
                    break
                }
                case 4:{
                    let go
                    do{
                        go = this.putDiagonalWords(word, Math.floor((Math.random() * places) + 1), false)
                    }while(go == false)
                    break
                }
                default:
                    break
            }
        });
        
        return board;
    }


}

export default new GenerateSoup();