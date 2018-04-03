import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: Product[];
  constructor() {
    this.data = [
        {code: 'P100', libelle: 'Café', prixUnitaire: 400},
        {code: 'P200', libelle: 'Jus d\'orange', prixUnitaire: 800},
        {code: 'P300', libelle: 'Thé', prixUnitaire: 300},
        {code: 'P400', libelle: 'Coca-cola', prixUnitaire: 1000},

      ];
  }

  ngOnInit() {
  }

}
