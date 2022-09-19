import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';
import { InfoTeam } from '../interfaces/info-team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info : InfoPage = {};
  isloading =false;

  team : InfoTeam[] = []

  constructor(private mihttp : HttpClient) { 
    //console.log('servicio de informacion de pagina');

    this.loadInfo();
    this.loadTeam();

  }

  private loadInfo(){
    this.mihttp.get('assets/data/data-page.json')
      .subscribe( (resp:InfoPage) =>{
        this.isloading = true;
        this.info = resp;
        //console.log(resp  );
      });
  }

  private loadTeam(){
    this.mihttp.get<InfoTeam[]>('https://portafolio-3fc77-default-rtdb.firebaseio.com/team.json')
      .subscribe( (resp: InfoTeam[] ) =>{
        this.isloading = true;
        this.team = resp;
        //console.log(resp  );
      });
  }

}
