import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFull } from '../../interfaces/product-full.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: String="";
  prodFull : ProductFull= {
    category: '',
    desc1: '',
    desc2: '',
    product: '',
    resume: '',
    subtitle1: '',
    subtitle2: ''
  };

  constructor(private miroute: ActivatedRoute,
              public prodService: ProductsService) { }

  ngOnInit(): void {
    this.miroute.params
    .subscribe( params =>{
      this.id = params['id'];
      //console.log(params['id']);
      this.prodService.getProduct(params['id'])
        .subscribe( (prod: ProductFull) =>{
          this.prodFull = prod;
          
          //console.log(this.id);
          //console.log(prod);
        });

    });
  }

}
