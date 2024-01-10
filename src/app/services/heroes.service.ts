import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heros = [{name :'hero 1',id : 1},{name :'hero 2',id : 2},{name :'hero 3',id : 3},{name :'hero 4',id : 4},]

  constructor() { 
    
  }


  getHeroes(){
    return this.heros;
  }
}
