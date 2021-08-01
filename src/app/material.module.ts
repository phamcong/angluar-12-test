import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatPaginatorModule } from '@angular/material/paginator'

const materialModules = [
  MatPaginatorModule,
  MatCheckboxModule,
  MatCardModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
