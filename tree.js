let arr = [ 1, 12, 15, 8, 9, 10, 11, 12, 13 ]

function generateTree (arr) {
  function insertTree (tree, value) {
    if (value < tree.value) {
      if (!tree.leftChild) {
        tree.leftChild = {
          value,
          leftChild: null,
          rightChild: null
        }
      } else {
        insertTree(tree.leftChild, value)
      }
    } else {
      if (!tree.rightChild) {
        tree.rightChild = {
          value,
          leftChild: null,
          rightChild: null
        }
      } else {
        insertTree(tree.rightChild, value)
      }
    } 
  }

  let tree = {
    value: arr[0],
    leftChild: null,
    rightChild: null
  }

  for (let i = 1; i < arr.length; i++) {
    insertTree(tree, arr[i])
  }
  return tree
}

let tree = generateTree(arr)

// console.log(tree)

function tranverseTree (tree) {
  if (tree.leftChild) {
    tranverseTree(tree.leftChild)
  }
  console.log(tree.value)
  if (tree.rightChild) {
    tranverseTree(tree.rightChild)
  }
}

tranverseTree(tree)