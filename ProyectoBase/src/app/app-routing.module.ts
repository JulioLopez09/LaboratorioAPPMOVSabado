import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './auth/registrar/registrar.page';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registro', component: RegistrarPage },
  { path: 'registrar', component: RegistrarPage },
  { path: 'login', component: LoginPage },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'movimientos', loadChildren: './movimientos/movimientos.module#MovimientosPageModule' },
  { path: 'resumen', loadChildren: './resumen-chart/resumen-chart.module#ResumenChartPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
