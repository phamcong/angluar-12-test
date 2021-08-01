import { ProductListItem } from "src/app/shared/models/product"

export function generateProductListItems(nbItems: number): ProductListItem[] {
    const ageRangeList: [number, number][] = [[0, 3], [3, 6], [6, 12], [12, 36], [36, 72], [72, 108], [108, 180]]
    const brands = ['Apple', 'Microsoft', 'Google', 'Amazon']
    return [...Array(nbItems).keys()].map((item, idx) => {
        return {
            name: `Product ${ idx }`,
            brand: brands[Math.round(Math.random() * brands.length)],
            price: Math.round(Math.random() * 1e7),
            unit: 'VND',
            ageRange: ageRangeList[Math.round(Math.random() * ageRangeList.length)]
        }
    })
}