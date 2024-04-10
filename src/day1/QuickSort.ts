
const arr: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return;
    const pivot = partition(arr, low, high)
    qs(arr, low, (pivot - 1))
    qs(arr, (pivot + 1), high)
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high]
    let insert = low - 1; 
    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            insert++;
            const temp = arr[i];
            arr[i] = arr[insert];
            arr[insert] = temp;
        }
    }
    insert++
    arr[high] = arr[insert];
    arr[insert] = pivot;
    return insert;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}