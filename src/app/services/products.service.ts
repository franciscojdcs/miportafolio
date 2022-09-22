import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFull } from '../interfaces/product-full.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isLoading = true;
  products: Product[]=[];
  productsFilter: Product[]=[];


  constructor(private mihttp : HttpClient ) { 
    this.loadProducts();
  }

  private loadProducts(){
    return new Promise<void>( (resolve, reject) =>{
      this.mihttp.get<Product[]>("https://portafolio-3fc77-default-rtdb.firebaseio.com/products_idx.json")
      .subscribe( (resp) => {
        //console.log(resp);
        this.products = resp;
        this.isLoading = false;
        resolve();
      });
    } );
  }

  getProduct(id: String){
    //return toda el objeto para ser procesado desde otro componente
    return this.mihttp.get<ProductFull>(`https://portafolio-3fc77-default-rtdb.firebaseio.com/products/${id}.json`);
  }

  searchProduct(cond : string){

    if (this.products.length === 0){
      this.loadProducts().then( ()=>{
        this.filterProducts(cond);
      });
      
    }else{
      this.filterProducts(cond);
    }


  }

  private filterProducts(cond : string){
    this.productsFilter = [];

    /*this.productsFilter = this.products.filter( pro =>{
      return true;
    });*/
    cond =  cond.toLocaleLowerCase();
    this.products.forEach( (prod : Product) =>{
      if (prod.category.indexOf(cond) >= 0
        || prod.title.toLocaleLowerCase().indexOf(cond) >=0 ){
        this.productsFilter.push(prod);
      }
    });

    //console.log(this.productsFilter);
  }
}

