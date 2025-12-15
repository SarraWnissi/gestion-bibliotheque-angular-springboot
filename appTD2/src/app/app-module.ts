import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Categories } from './categories/categories';
import { Livres } from './livres/livres';
import { Ajout } from './ajout/ajout';
import { Layout } from './layout/layout';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [App, Login, Categories, Livres, Ajout, Layout],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthGuard,provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
