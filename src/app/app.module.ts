import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/frames/header/header.component';
import { ButtonComponent } from './components/lego-pieces/button/button.component';
import { WellsComponent } from './components/pieces/wells/wells.component';
import { MenuComponent } from './components/frames/menu/menu.component';
import { MenuItemComponent } from './components/lego-pieces/menu-item/menu-item.component';
import { MainViewComponent } from './components/frames/main-view/main-view.component';
import { WellCardComponent } from './components/lego-pieces/well-card/well-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    WellsComponent,
    MenuComponent,
    MenuItemComponent,
    MainViewComponent,
    WellCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
