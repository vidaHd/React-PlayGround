// const FunctionEqual = () => {
//   const obj1 = { name: "vida", age: 255 };
//   const obj2 = { name: "vida", age: 20 };

//   function equal(obj1, obj2) {
//     for (var i in obj1) {
//       if (obj1.hasOwnProperty.call(i)) {
//         if (!obj2.hasOwnProperty.call(i)) return false;
//         if (obj1[i] != obj2[i]) return false;
//       }
//     }

//     for (var x in obj2) {
//       if (obj2.hasOwnProperty.call(x)) {
//         if (!obj1.hasOwnProperty.call(x)) return false;
//         if (obj1[x] != obj2[x]) return false;
//       }
//     }

//     return true;
//   }
//   equal(obj1, obj2);
//   console.log(equal(obj1, obj2));
//   return (
//     <>
//       <p>fff</p>
//     </>
//   );
// };
// export default FunctionEqual;
const FunctionEqual = () => {
  const obj1 = { name: "vida", age: 20 };
  const obj2 = { name: "vida", age: 20 };

  function equal(obj1, obj2) {
    const a = obj1;
    const b = obj2;
    console.log(a[1]);
    console.log(b);

    if (a === b) {
      console.log("yes");
    } else {
      console.log("no");
    }
    return true;
  }
  equal(obj1, obj2);
  console.log(equal(obj1, obj2));
  return (
    <>
      <p>fff</p>
    </>
  );
};
export default FunctionEqual;
