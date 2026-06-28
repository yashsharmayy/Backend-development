const logicalerror = () => {
  let num = 5;
  if ((num = 10)) {
    // it should be double ==
    console.log(num);
  } else {
    console.log("num is not 10");
  }

  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]); // Print undefind at the end
  }
  let num1 = "10";
  console.log(num1 + 5); // expect the result 15
};
module.exports = logicalerror;
