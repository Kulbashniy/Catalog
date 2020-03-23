import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TovarsPageComponent } from './components/tovars-page/tovars-page.component';
import { LoginComponent } from './components/login/login.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';






@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    CatalogPageComponent,
    LayoutComponent,
    TovarsPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogsModule,
    BrowserAnimationsModule,
    FormsModule,
    PopupModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
