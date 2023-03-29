import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';

import { HttpClientModule } from '@angular/common/http';
import { ReceitaComponent } from './views/receita/receita.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputReceitaComponent } from './views/input-receita/input-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBoxComponent,
    ReceitaComponent,
    InputReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
