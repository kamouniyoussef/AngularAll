import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms'; // ✅ Import important
import { Product } from '../product/product';
import { ProductsService } from '../services/product';
<<<<<<< HEAD
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';
=======
import { RedirectCommand } from '@angular/router';
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

<<<<<<< HEAD
    constructor(private router : Router,private route : ActivatedRoute,private productsService: ProductsService) { }
=======
    constructor(private productsService: ProductsService) { }
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855
  

 
  product = {
  category: '',
  description: '',
  image_url: '',
  name: '',
  price: 0,
  quantity: 0,
  sku: '',
  unit: ''
};



    


   AddProduct() {
     console.log('Produit ajouté :', this.product);
     this.productsService.createProduct(this.product).subscribe({
       next: (data) => {
         console.log('✅ Produit créé:', data)
          alert('Produit ajouté avec succès !');
          this.resetForm();
<<<<<<< HEAD
           this.router.navigate(['/products'], { queryParams: { message: 'Produit ajouté avec succès !' } });
=======
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855
        },
        error: (err) => {
          console.error('❌ Erreur création produit:', err);
          alert('Erreur lors de l\'ajout du produit.');
        }
     });

 

   }


resetForm() {
    this.product = {
      
      category: '',
      description: '',
      image_url: '',
      name: '',
      price: 0,
      quantity: 0,
      sku: '',
      unit: ''
    };
  }

}
