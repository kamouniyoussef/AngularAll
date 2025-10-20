import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { About } from './about/about';
import { AddProduct } from './add-product/add-product';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'products', component: Product},
    {path: 'about', component: About},
    {path: 'AddProduct', component: AddProduct},



];
