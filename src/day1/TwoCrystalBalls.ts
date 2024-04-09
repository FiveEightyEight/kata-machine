// function binary_search(arr: boolean[]): number[] {
//     let lo = 0;
//     let hi = arr.length;
//     do {
//         const m = Math.floor(hi - (hi - lo) / 2);
//         const value = arr[m]
//         if (value) return [lo, hi]
//         lo = m + 1
//     } while (lo < hi)
//     return [0, arr.length]
// }
// export default function two_crystal_balls(breaks: boolean[]): number {

//     const [start, end] = binary_search(breaks)
//  // naive way would be to walk up each floor until you find what floor it breaks
//     for (let i = start; i < end; ++i) {
//         if (breaks[i]) return i
//     }
//     return -1;
// }

function find_break(arr: boolean[]): number[] {
    const by_sqrt = Math.floor(Math.sqrt(arr.length))
    for (let i = 0; i < arr.length; i += by_sqrt) {
        if (arr[i]) return [i - by_sqrt, i]
    }
    return [arr.length, arr.length]
}


export default function two_crystal_balls(breaks: boolean[]): number {

    
    const [start, end] = find_break(breaks);
 // naive way would be to walk up each floor until you find what floor it breaks
    for (let i = start; i < end; ++i) {
        if (breaks[i]) return i
    }
    return -1;
}