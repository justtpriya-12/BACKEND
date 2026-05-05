// Sliding Window Sum Function
function slidingWindowSum(arr, k) {
  // Edge case
  if (k > arr.length || k <= 0) return [];

  let result = [];
  let sum = 0;

  // Step 1: Calculate first window sum
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  result.push(sum);


  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    result.push(sum);
  }

  return result;
}


let arr = [1, 2, 3, 4];
let k = 2;

let output = slidingWindowSum(arr, k);
console.log("Output:", output);