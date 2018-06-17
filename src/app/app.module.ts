import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaCrecheComponent } from './lista-creche/lista-creche.component';
import { routing } from './app.routing';
import { DetalheOngComponent } from './detalhe-ong/detalhe-ong.component';
import { DetalheCrecheComponent } from './detalhe-creche/detalhe-creche.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaCrecheComponent,
    DetalheOngComponent,
    DetalheCrecheComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
