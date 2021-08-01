import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { MaterialModule } from './material.module';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterComponent } from './components/product/product-filter/product-filter.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductListItemComponent } from './components/product/product-list-item/product-list-item.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductListComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
