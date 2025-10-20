import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms'; // ✅ Import important
import { Product } from '../product/product';
import { ProductsService } from '../services/product';
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

    constructor(private router : Router,private route : ActivatedRoute,private productsService: ProductsService) { }
  

 
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
           this.router.navigate(['/products'], { queryParams: { message: 'Produit ajouté avec succès !' } });
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
