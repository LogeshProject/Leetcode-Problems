
function mapping(s){

    let arr = []

    for(let i=s.length-1 ; i>=0 ;i--){
        if(s[i]==='#' ){

            arr.push(s[i-2]+s[i-1]+s[i]);
        }else if(s[i+1]!=='#' && s[i+2]!=='#'){
            arr.push(s[i]);
        }
    }

    let arr2 = arr.reverse()

    let str = '' ;

    for(let i=0;i<arr2.length;i++){
        if(arr2[i] > 0 && arr2[i] < 9){
            console.log(arr2[i])
            str = str + String.fromCharCode((96+parseInt(arr2[i])))
        }else{
            let n = arr2[i].slice(0,2) ;
            str = str + String.fromCharCode((96+parseInt(n)))
            
        }
    }

    return str



    

}

let s = "10#11#12" ;    // 10# , 11# , 1, 2

let res = mapping(s);


console.log(res)
