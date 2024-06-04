function add(a,b){
    b = b|| 1
    return a+b
}

function add1(a,b=1){
    return a+ b
}


export {add,add1}