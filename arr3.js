function generateArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function printArray(arr) {
  console.log(arr.join(" "));
}


function bubbleSort(arr, ascending) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const needSwap = ascending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
      if (needSwap) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr = generateArray(10, 1, 100);
console.log("До сортування:");
printArray(arr);

bubbleSort(arr, true);
console.log("Bubble sort, за зростанням:");
printArray(arr);

bubbleSort(arr, false);
console.log("Bubble sort, за спаданням:");
printArray(arr);

function insertionSort(arr, ascending) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && (ascending ? arr[j] > current : arr[j] < current)) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}
const arr2 = generateArray(10, 1, 100);
console.log("До сортування:");
printArray(arr2);

insertionSort(arr2, true);
console.log("Insertion sort, за зростанням:");
printArray(arr2);

insertionSort(arr2, false);
console.log("Insertion sort, за спаданням:");
printArray(arr2);

function selectionSort(arr, ascending) {
  for (let i = 0; i < arr.length - 1; i++) {
    let best = i;

    for (let j = i + 1; j < arr.length; j++) {
      const better = ascending ? arr[j] < arr[best] : arr[j] > arr[best];
      if (better) {
        best = j;
      }
    }

    if (best !== i) {
      const temp = arr[i];
      arr[i] = arr[best];
      arr[best] = temp;
    }
  }
  return arr;
}

const arr3 = generateArray(10, 1, 100);
console.log("До сортування:");
printArray(arr3);

selectionSort(arr3, true);
console.log("Selection sort, за зростанням:");
printArray(arr3);

selectionSort(arr3, false);
console.log("Selection sort, за спаданням:");
printArray(arr3);







function measureTime(sortFunction, arr, ascending) {
  const copy = [...arr];
  const start = performance.now();
  sortFunction(copy, ascending);
  const end = performance.now();
  return end - start;
}

const testArr = generateArray(1000000, 1, 10000);


console.log("Bubble sort, за зростанням:  ", measureTime(bubbleSort, testArr, true).toFixed(2));
console.log("Bubble sort, за спаданням:   ", measureTime(bubbleSort, testArr, false).toFixed(2));

console.log("Insertion sort, за зростанням:", measureTime(insertionSort, testArr, true).toFixed(2));
console.log("Insertion sort, за спаданням: ", measureTime(insertionSort, testArr, false).toFixed(2));

console.log("Selection sort, за зростанням:", measureTime(selectionSort, testArr, true).toFixed(2));
console.log("Selection sort, за спаданням: ", measureTime(selectionSort, testArr, false).toFixed(2));
