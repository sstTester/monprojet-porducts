import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: Product;
  constructor() {
    this.data = [
        {code: 'P100', libelle: 'Café', prixUnitaire: 500.5},
        {code: 'P200', libelle: 'Jus d\'orange', prixUnitaire: 500.5},
        {code: 'P300', libelle: 'Thé', prixUnitaire: 500.5},
        {code: 'P400', libelle: 'Coca-cola', prixUnitaire: 500.5},
      ];
  }

  ngOnInit() {
  }

}
