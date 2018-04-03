import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }
  public getProducts(): Product[] {
    return [
      {code: 'P100', libelle: 'Café', prixUnitaire: 400},
      {code: 'P200', libelle: 'Jus d\'orange', prixUnitaire: 800},
      {code: 'P300', libelle: 'Thé', prixUnitaire: 300},
      {code: 'P400', libelle: 'Coca-cola', prixUnitaire: 1000},
    ];
  }
}

