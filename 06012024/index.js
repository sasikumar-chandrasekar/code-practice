const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
  };
  
//   const obj2 ={...obj1};
//   const obj2 = Object.assign({}, obj1);
const obj2 = JSON.parse(JSON.stringify(obj1));

  obj2.c.name = "hello"

  console.log("obj1", obj1)
  console.log("obj2", obj2)