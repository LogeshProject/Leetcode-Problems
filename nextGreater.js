var nextGreaterElement = function(n) {
    let s = n.toString()
    s = s.split('').sort().join('')
    let s2 = s.split('').sort((a,b)=> b-a).join('')


    
    

    if(s > n) return s;
    else if(s2 > n) return s2;
    else return -1 ;
    
   
    
};




let n = 101

let res = nextGreaterElement(n)

console.log(res);
