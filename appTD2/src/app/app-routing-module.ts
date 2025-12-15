import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Categories } from './categories/categories';
import { Ajout } from './ajout/ajout';
import { Livres } from './livres/livres';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard], // utilisateur authentifié
    children: [
      { path: 'categories', component: Categories },
      { path: 'livres/:id', component: Livres },
      { path: 'ajout', component: Ajout },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
