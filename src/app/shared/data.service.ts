import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products =[
    {id:1,name:'egg',category:'Food',description:'Lorem egg',price:1},
    {id:2,name:'Coca',category:'Drink',description:'Lorem Drink',price:1},
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
      return this.products.filter((product) => product.id == id);
  }
}
