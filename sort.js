function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}

function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
        const temp = a[i];
        let minIndex = i;

        for (let j = i+1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }

    return arr;
}

function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[0]) {

            a.unshift(a.splice(i, 1)[0])

        } else {
            for (let j = 1; j < i; j++) {
                // i > j-1 && i < j, inbetween
                if (a[i] > a[j-1] && a[i] < a[j]) {
                    a.splice(j, 0, a.splice(i, 1)[0])
                }
            }
        }
    }

    return a;
} 

function _merge(left, right) {
    let leftIndex = 0, rightIndex = 0, result = [];

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(a) {
    if (a.length < 2) {
        return a;
    }

    const length = a.length;
    const middle = length / 2;

    const left = a.slice(0, middle);
    const right = a.slice(middle);

    return _merge(mergeSort(left), mergeSort(right));
}

function _quickSort(a, left, right) {
    let partitionIndex;
    let pivot = left;

    if (left < right) {
        pivot = right;

        partitionIndex = _partition(a, pivot, left, right);

        console.log("=>>>>>", a)

        _quickSort(a, left, partitionIndex-1);
        _quickSort(a, partitionIndex+1, right);
    }

    return a;
}

function _partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function quickSort(arr) {
    // [6, 5, 3, 1, 8, 7, 2, 4]
    // left, right, pivot and recursive
    return _quickSort(arr, 0, arr.length-1);
}

function _doHeapify(arr, currentIndex) {
    if (currentIndex < 1) {
        return;
    }
    const parentIndex = Math.floor(currentIndex/2);

    // if a[i/2] < a[i] then swap and repeat for parent index, until currentindex == 0
    if (arr[parentIndex] > arr[currentIndex]) {
        const temp = arr[parentIndex];
        arr[parentIndex] = arr[currentIndex];
        arr[currentIndex] = temp;
        _doHeapify(arr, parentIndex);
    }
}

function _heapify(arr) {
    for (let i = 1; i < arr.length; i++) {
        _doHeapify(arr, i);
    }

    return arr;
}

function _heapSort(arr) {
    let size = arr.length-1;
    let newArr = [];

    while (size >= 0) {
        const top = arr[0];
        const last = arr.pop();
        arr[0] = last;

        arr = _heapify(arr);

        newArr.push(top);

        size--;
    }

    return newArr;
}

function heapSort(arr) {
    arr = _heapify(arr);

    return _heapSort(arr);
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4]

console.log(arr);
let sorted = heapSort(arr);
console.log(sorted);

arr.slice()