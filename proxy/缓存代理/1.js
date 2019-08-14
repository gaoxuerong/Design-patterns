// 1!=1;4!=3*2*1;n!= n*(n-1)!
let m = function(n){
    if(n<=1){
        return 1;
    }else{
        return n*m(n-1)
    }
}