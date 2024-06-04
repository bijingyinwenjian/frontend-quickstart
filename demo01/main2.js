let arr = [1,2,3]
const[x,y,z] = arr
console.log(x,y,z)


const person = {
    name:"jack",
    age:21,
    language:['java','js','css']
}

const {age,name,language} = person;
console.log(age);
console.log(name);
console.log(language);

let message = null
const firstName = message?.body?.user?.firstName || 'default'
console.log(firstName);

function add(a,b){
    b = b|| 1
    return a+b
}

function add1(a,b=1){
    return a+ b
}

console.log(add(10));
console.log(add1(10));
let print = obj => console.log(obj);
print(100)

let sum = (a,b) => {
    c = a+b
    return c
}

console.log(sum(1,2));
console.log(`${name},${age}你真的好帅${language}`);

export {add,add1}