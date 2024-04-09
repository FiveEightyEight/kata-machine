export default function bubble_sort(arr: number[]): void {
    // iterate
    // each iteration check i+1
    // if larger, swap (track swap)
    // do till end
    // next iteration do arr length - j

    for (let i = 0, swap = false, j = arr.length; i < arr.length; ++i, --j) {
        for (let k = 0; k < j; ++k) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k+1]
                arr[k+1] = arr[k]
                arr[k] = temp
                swap = true
            }
        }
        if (!swap) break
    }
}