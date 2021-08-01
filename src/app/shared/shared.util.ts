export function compareTwoArray(a: any[], b: any[]): boolean {
    a.sort(); b.sort()
    return JSON.stringify(a) === JSON.stringify(b)
}