import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { About } from './about/about';
import { AddProduct } from './add-product/add-product';
import { UpdateProductComponent } from './update-product/update-product.component';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'products', component: Product},
    {path: 'about', component: About},
    {path: 'AddProduct', component: AddProduct},
{ path: 'getproduit/:id', component: UpdateProductComponent }




];
