/**
 * selection sort
 * Array is imaginary divided into two parts-sorted one and unsorted one.
 * O(n^2)
 */

let arr = [ 1, 12, 15, 8, 9, 10, 11, 12, 13 ]

function selectionSort (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      let tmp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = tmp
    }
  }
}

selectionSort(arr)

console.log(arr)