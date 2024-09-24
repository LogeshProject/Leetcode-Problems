
var finalPositionOfSnake2 = function(n, com) {

    let num = 0 ;

    
        for(let j=0;j<com.length;j++){
            if(com[j]==='RIGHT'){
                num+=1 ;
            }else if(com[j]==='DOWN'){
                num+=n ;
            }else if(com[j]==='UP'){
                num-=n ;
            }
            
        }
    

    return num ;
};




let n = 2;

let com = [ 'RIGHT' ,'DOWN']


let res = finalPositionOfSnake2(n , com)

console.log(res);
