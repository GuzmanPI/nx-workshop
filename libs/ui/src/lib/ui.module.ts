import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductCardComponent],
  exports: [
    ProductCardComponent
  ]
})
export class UiModule {}
