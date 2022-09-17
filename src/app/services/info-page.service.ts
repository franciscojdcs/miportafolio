import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info : InfoPage = {};
  isloading =false;

  constructor(private mihttp : HttpClient) { 
    //console.log('servicio de informacion de pagina');

    this.mihttp.get('assets/data/data-page.json')
      .subscribe( (resp:InfoPage) =>{
        this.isloading = true;
        this.info = resp;
        console.log(resp  );
      });
  }
}
