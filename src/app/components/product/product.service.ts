import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, of } from "rxjs"
import { delay, distinctUntilChanged, tap } from "rxjs/operators"
import { ProductFilter, ProductListItem } from "src/app/shared/models/product"
import { generateProductListItems } from "./product.utils"

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    allProductLItems$!: Observable<ProductListItem[]>
    productFilterBSub = new BehaviorSubject<ProductFilter>({ ageRanges: [] })
    productFilter$ = this.productFilterBSub
        .pipe(
            tap(filter => {
                console.log(filter)
            }),
            delay(2000),
            distinctUntilChanged()
        )

    constructor() {
        this.allProductLItems$ = this.getProducts()
    }

    getProducts(): Observable<ProductListItem[]> {
        return of(generateProductListItems(100)).pipe(delay(1000))
    }
}