import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heros = [];
  constructor( heroesServices : HeroesService){
     
    
  }

}
