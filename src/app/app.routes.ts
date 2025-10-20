import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';
import { About } from './about/about';
import { AddProduct } from './add-product/add-product';
<<<<<<< HEAD
import { UpdateProductComponent } from './update-product/update-product.component';
=======
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'products', component: Product},
    {path: 'about', component: About},
    {path: 'AddProduct', component: AddProduct},
<<<<<<< HEAD
{ path: 'getproduit/:id', component: UpdateProductComponent }

=======
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855



];
