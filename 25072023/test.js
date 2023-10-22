for (let i = 0; i < 10; i++) {
    setTimeout(() => { console.log(i) })
}

// input: [1, 4, 6, 3, 1]
// output: {1: 2, 3: 1, 4:1, 6: 1}


// const arr = [1, 4, 6, 3, 1];
// // const obj = {};

// // for (let i = 0; i < arr.length; i++) {
// //     obj[arr[i]] = (obj[arr[i]] || 0) + 1
// // }

// // console.log("obj", obj);

// // const [a, ...rest] = arr;
// // console.log("rest", rest)

// // // spred

// // const obj= {id: 20};

// // const obj2 ={
// //     ...obj,
// //     name: "test"
// // }


// // console.log("obj2", obj2)


// // let a = "abcd";

// // console.log([...a]);

// // const result = new Promise((resovle, reject)=>{
// //     fetch("url").then((res)=>{
// //         return resovle(result)
// //     }).catch((err)=>{
// //         return reject(err)
// //     })
// // }).then((res)=>{
// //     return res;
// // });

// // functional component
// useEffect(()=>{
// // fetch("")
// return () => null;
// }, [])

// // 
// const Test =()=>{
//     return(<><h1>Hello</h1><h1>Hello</h1></>)
// }

