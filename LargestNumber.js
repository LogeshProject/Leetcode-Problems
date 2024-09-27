function Largest(arr){

    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

    return nums
}

let arr = [ 10 , 2]

let res = Largest(arr) ;

console.log(res);


