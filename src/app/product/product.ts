import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/product';
import { ProductModel } from '../models/product.model';

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

  constructor(private productsService: ProductsService) { }
  //                    ↑↑↑ p sghira - s7i7

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      //   ↑↑↑ p sghira
      next: (data) => {
        console.log(' Produits reçus:', data);
        console.log(' Premier produit ID:', data[0]?.id_product);
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