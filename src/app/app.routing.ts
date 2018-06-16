import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { ListaCrecheComponent } from './lista-creche/lista-creche.component';
import { ModuleWithProviders } from '@angular/core';
import { DetalheOngComponent } from './detalhe-ong/detalhe-ong.component';
import { DetalheCrecheComponent } from './detalhe-creche/detalhe-creche.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lista-creche', component: ListaCrecheComponent },
    { path: 'detalhe-ong', component: DetalheOngComponent },
    { path: 'detalhe-creche', component: DetalheCrecheComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);