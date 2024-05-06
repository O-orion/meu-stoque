import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuServicosComponent } from './components/menu-servicos/menu-servicos.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuServicosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    MenuServicosComponent
  ]
})
export class SharedModule { }
