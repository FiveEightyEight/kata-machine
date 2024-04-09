export default function linear_search(haystack: number[], needle: number): boolean {
    // iterate
    // if current number matches needle return true
    // if we exit loop, we didn't find needle, return false

    for (let i = 0; i < haystack.length; ++i) {
        const num = haystack[i];
        if (num === needle) return true;
    }
    return false;
}