import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 formData = Product; 
  constructor(private firestore:AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('product').snapshotChanges();
  }
}
