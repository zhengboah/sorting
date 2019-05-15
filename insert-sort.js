
let arr = [ 1, 12, 15, 8, 9, 10, 11, 12, 13 ]

function insertSort (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      // a bit like bubble sort
      if (arr[j] < arr[j-1]) {
        let tmp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tmp
      }
    }
  }
}

insertSort(arr)

console.log(arr)