import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsService } from '../services/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
    standalone: true,

  imports: [CommonModule,FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
   constructor(private route: ActivatedRoute,private router: Router, private productsService: ProductsService) {}

   product: ProductModel = {
  id_product: 0,
  category: '',
  description: '',
  image_url: '',
  name: '',
  price: 0,
  quantity: 0,
  sku: '',
  unit: ''
};

 
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id) {
    this.productsService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data; // <-- Angular va afficher les valeurs dans les inputs
      },
      error: (err) => console.error(err)
    });
  }
}


 

 

  

   updateProduct(id: number ,product: ProductModel): void {
    console.log('✏️ Mise à jour ID:', id,product.image_url);
    // Logique de mise à jour ici
     this.productsService.updateProduct(id,product).subscribe({
        next: () => {
          console.log('✅ Produit mis à jour');
          alert('Produit mis à jour avec succès !');
          this.router.navigate(['/products'], { queryParams: { message: 'Produit mis à jour avec succès !' } });

         },
        error: (err) => {
          console.error(' Erreur mise à jour:', err);
          alert('Erreur lors de la mise à jour');
        }
      });


  }

}
