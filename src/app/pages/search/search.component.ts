import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private miroute : ActivatedRoute,
              public prodsService : ProductsService) { }

  ngOnInit(): void {
    this.miroute.params
      .subscribe( params => {
        //console.log(params['condition']);
        this.prodsService.searchProduct(params['condition']);
      });

  }

}
