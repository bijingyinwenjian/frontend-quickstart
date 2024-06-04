import { add,add1 } from "./libs/core.js"

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  
  console.log(fetchPromise);
  
fetchPromise.then((res)=>{
    console.log(`${res.status}`);
    const jsonPromise = res.json();
    jsonPromise.then((json) => {
        console.log(json[0].name);
    })
})
console.log(`发送请求`);


let get = function(url,data){
    return new Promise((resolve,reject) => {
        $.ajax({
            url: url,
            type: "GET",
            data:data,
            success(result){
                resolve(result)
            },
            error(error){
                reject(error)
            },
        })
    })
}

let a = add(1)
add1(11)
console.log(`a = ${a}`);