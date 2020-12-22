import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { PokemonCrudComponent } from './views/pokemon-crud/pokemon-crud.component';
import { PokemonReadComponent } from './components/pokemon/pokemon-read/pokemon-read.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [{

  path:"",
  component: HomeComponent
},{
  path:"products",
  component: ProductCrudComponent
},{
  path:"products/create",
  component: ProductCreateComponent
},{
  path:"products/update/:id",
  component: ProductUpdateComponent
},{
  path:"products/delete/:id",
  component: ProductDeleteComponent
},{
  path:"pokemon",
  component: PokemonCrudComponent
},{
  path:"pokemon/read",
  component: PokemonReadComponent
},{
  path:"pokemon/details/:id",
  component: PokemonDetailComponent
},{
  path:"",
  pathMatch:'full', redirectTo:""
},{
  path:"**",
  pathMatch:'full', redirectTo:""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
