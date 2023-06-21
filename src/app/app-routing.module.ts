import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DetailsProductComponent } from "./products/details-product/details-product.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'product/:id', component:DetailsProductComponent},
    {path:'**',component:NotFoundComponent}
];
//HomePage
// 404 
// DetailsProduct

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}