export interface ProductListItem {
    name: string
    price: number
    unit: string
    brand: string
    ageRange: [number, number]
}

export interface ProductFilter {
    ageRanges: [number, number][]
}