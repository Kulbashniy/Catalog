import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { TovarsPageComponent } from './components/tovars-page/tovars-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'tovars', component: TovarsPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
