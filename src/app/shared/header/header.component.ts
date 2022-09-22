import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoServ : InfoPageService,
              private miroute : Router ) { }

  ngOnInit(): void {
  }

  searchProduct(cond : string){
    if (cond.length < 1){
      return;
    }
    this.miroute.navigate(['/search', cond]);
    //console.log(cond);
  }

}
