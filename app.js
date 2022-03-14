// slowMath
//   .add(6, 2)  // changed to .add(1, 1) to test err
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.multiply(resolve, 2);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.divide(resolve, 4);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.subtract(resolve, 3);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.add(resolve, 98);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.remainder(resolve, 2);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.multiply(resolve, 50);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.remainder(resolve, 40);
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//     return slowMath.add(resolve, 32);
//   })
//   .then(function (resolve) {
//     console.log(`The final result is ${resolve}`);
//   })
//   .catch((err) => alert(err));

let doMath = async () => {
  try {
    let result = await slowMath.add(6, 2); // Changed to let result = await slowMath.add(1, 1); to test err
    console.log(result);
    let result2 = await slowMath.multiply(result, 2);
    console.log(result2);
    let result3 = await slowMath.divide(result2, 4);
    console.log(result3);
    let result4 = await slowMath.subtract(result3, 3);
    console.log(result4);
    let result5 = await slowMath.add(result4, 98);
    console.log(result5);
    let result6 = await slowMath.remainder(result5, 2);
    console.log(result6);
    let result7 = await slowMath.multiply(result6, 50);
    console.log(result7);
    let result8 = await slowMath.remainder(result7, 40);
    console.log(result8);
    let result9 = await slowMath.add(result8, 32);
    console.log(result9);
    let answer = console.log("the answer is " + result9);
  } catch (err) {
    alert(err);
  }
};

doMath();
