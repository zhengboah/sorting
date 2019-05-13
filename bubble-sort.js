/**
 * Bubble sort
 *  1. Compare each pair of adjacent elements from the beginning of an array and if they are in reversed order, swap them.
 *  2. If at least on swap has been done, repeat step 1. 
 * Complexity: O(n^2)
 */

let arr = [ 1, 2, 5, 8, 9, 10, 11, 12, 13 ]

let swapCount = 0
let count = 0

function bubble_sort (arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      count++
      if (arr[j] > arr[j+1]) {
        swapCount++
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
}

function bubble_sort_optimize (arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let flag = true
    for (let j = 0; j < length - i; j++) {
      count++
      if (arr[j] > arr[j+1]) {
        flag = false
        swapCount++
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
    // optimize 
    if (flag) {
      return
    }
  }
}


// bubble_sort(arr)
bubble_sort_optimize(arr)
console.log(arr, count, swapCount)