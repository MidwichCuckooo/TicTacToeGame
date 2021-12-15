 testArrey = [["_","_","_"],["_","_","_"],["_","_","_"]];
  
  let xZeroX = 0;
  let xOneX = 0;
  let xTwoX = 0;
 let yZeroX = 0;
 let yOneX = 0;
 let yTwoX = 0;

  let xZeroO = 0;
  let xOneO = 0;
  let xTwoO = 0;
 let yZeroO = 0;
 let yOneO = 0;
 let yTwoO = 0;
 
 // this variables are holding count for how many times did users wrote the same number (from 1-3) 
 // and if the player inputted same number 3 times he wins. 

let reader = require('readline-sync');

                    function tpoghO(x,y){
                            testArrey[x][y] = "O";
                        return testArrey;
                        
                    }           

                    function tpoghX(x,y){
                            testArrey[x][y] = "X";
                        return testArrey;
                        
                    }
                    
                   
                     function vertic(mat){
                        let result = "";
                        for (let i = 0; i < mat.length; i++) {
                            for (let j = 0; j < mat[i].length; j++) {
                            result += mat[i][j] + (j === mat[i].length - 1 ? '' : ' ');
                        }
                        result += (i === mat.length - 1 ? '' : '\n');
                        }   
                     return result; 
                    }
                    
                    function winCounter(zeroH,oneH,twoH,zeroV,oneV,twoV,x,y){
                        if(x == 0){
                           zeroH += 1;
                        } else if (x == 1) {
                                oneH += 1;
                             } else if (x == 2){
                                twoH += 1;
                             }
                         if(y == 0){
                             zeroV +=1;
                         } else if(y == 1){
                                oneV += 1;
                            } else if(y == 2){
                                twoV += 1;
                            }
                    }




                const player1 = reader.question("please insert your name (you play for X ): ")
                const player2 = reader.question("please insert your name (you play for O ): ")






for(i=0; i<10; i++){
    let x = 10
    let y = 10
    
   
        do {
        console.log("Dear " + player1 + ", please insert a number in an unused field from 1-3")
        
        
         x = reader.question('insert x axis: ');
         y = reader.question('insert y axis: ');
            x -= 1;
            y -= 1;
    } while (x<0 || x>2 || y<0 || y>2 || testArrey[x][y] == "X" || testArrey[x][y] == "O");
        

        x = parseInt(x, 10);
        y = parseInt(y, 10);
    
        console.log(vertic(tpoghX(x,y)));
        
        winCounter(xZeroX, xOneX, xTwoX, yZeroX, yOneX, yTwoX,x,y);
            
            
            if(xZeroX == 3 || xOneX == 3 || xTwoX == 3
            || yZeroX == 3 || yOneX == 3 || yZeroX == 3
            || testArrey[0][0] == testArrey[1][1] && testArrey[1][1] == testArrey[2][2]  
                && testArrey[1][1] != '_'
            || testArrey[0][2] == testArrey[1][1] && testArrey[1][1] == testArrey[2][0] 
                && testArrey[1][1] != '_' ){
                console.log("Congratulations " + player1 + " wins playing by X's ")
                    break;
            }
                 
                    
    
            do {
                console.log("Dear " + player2 + ", please insert a number in an unused field from 1-3")
                
                
                 x = reader.question('insert x axis: ');
                 y = reader.question('insert y axis: ');
                    x -= 1;
                    y -= 1;
            } while (x<0 || x>2 || y<0 || y>2 || testArrey[x][y] == "X" || testArrey[x][y] == "O");
         
            x = parseInt(x, 10);
            y = parseInt(y, 10);

        console.log(vertic(tpoghO(x,y)));
        
        winCounter(xZeroO, xOneO, xTwoO, yZeroO, yOneO, yTwoO,x,y);
                
        if(xZeroO == 3 || xOneO == 3 || xTwoO == 3
            || yZeroO == 3 || yOneO == 3 || yZeroO == 3
            || testArrey[0][0] == testArrey[1][1] && testArrey[1][1] == testArrey[2][2]  
                && testArrey[1][1] != '_'
            || testArrey[0][2] == testArrey[1][1] && testArrey[1][1] == testArrey[2][0] 
                && testArrey[1][1] != '_' ){
                console.log("Congratulations " + player2 + " wins playing by O's ")
                    break;
            }             
                
    }

     console.log("no one won. it's a tie")
 
     
 
  
   
            

 
 
 
 
 