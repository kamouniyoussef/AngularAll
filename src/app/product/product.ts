import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/product';
import { ProductModel } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product implements OnInit {
  products: ProductModel[] = [];
  loading: boolean = false;
  error: string = '';
  message: string = '';

constructor(private router: Router, private productsService: ProductsService,private route:ActivatedRoute) {}
 
  ngOnInit(): void {
    this.loadProducts();
     this.route.queryParams.subscribe(params => {
      this.message = params['message'] || null;
    });
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
       next: (data) => {
        console.log(' Produits reçus:', data);
         this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des produits';
        this.loading = false;
        console.error(' Erreur:', err);
      }
    });
  }

  getProduct(id: number | undefined): void {
  if (!id) {
    alert('Erreur: ID du produit introuvable');
    return;
  }

  this.productsService.getProduct(id).subscribe({
    next: (product) => {
      console.log('Produit reçu:', product);

      // Rediriger vers /getproduit en passant l'objet product
      this.router.navigate(['/getproduit', id], { state: { product } });
    },
    error: (err) => {
      console.error('Erreur:', err);
    }
  });
}
 



  deleteProduct(id: number | undefined): void {
    console.log('🗑️ Suppression ID:', id);
    
    if (!id) {
      alert('Erreur: ID du produit introuvable');
      console.error(' ID undefined');
      return;
    }

    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.productsService.deleteProduct(id).subscribe({
        next: () => {
          console.log('✅ Produit supprimé');
          alert('Produit supprimé avec succès !');
          this.router.navigate(['/products'], { queryParams: { message: 'Produit supprimé avec succès !' } });
          this.loadProducts();
        },
        error: (err) => {            
          console.error(' Erreur suppression:', err);
          alert('Erreur lors de la suppression');
        }
      });
    }
  }
}