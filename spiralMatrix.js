function spiralMatrix(matrix){

    if(matrix == [[1]]){
        arr.push(matrix[i][j])
    }
    

    let arr = [] ;

    for(let i=0;i<1;i++){

        for(let j=0;j<matrix[i].length;j++){

            arr.push(matrix[i][j])
        }
    }
    

    for(let i=1;i<matrix.length-1;i++){

        let j = matrix[i].length-1 ;

        arr.push(matrix[i][j])
        
    }

    for(let i=matrix.length-1;i<matrix.length;i++){

        for(let j=matrix[i].length-1;j>=0;j--){

            
                arr.push(matrix[i][j])
            
        }
    }

    for(let i=1;i<matrix.length-1;i++){

        for(let j=0;j<matrix[i].length-1;j++){

            arr.push(matrix[i][j])
        }
    }

    return arr ;
}


let arr = [[1,2,3],[4,5,6],[7,8,9]] ;

 let res = spiralMatrix(arr)

 console.log(res);
 

