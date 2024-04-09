export default function bs_list(haystack: number[], needle: number): boolean {
    // low
    // high (exclusive)
    if (haystack.length === 0) return false;
    let low = 0;
    let high = haystack.length;
    do {
        const mid_point = Math.floor(high - ((high - low) / 2));
        const value = haystack[mid_point]
        if (value === needle) return true
       
        if (value < needle) {
            low = mid_point + 1;
        } else if (value > needle) {
            high = mid_point
        }
    } while (low < high);
    return false;
}