import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel,FormControl,NgModelGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-heroes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './edit-heroes.component.html',
  styleUrl: './edit-heroes.component.css'
})
export class EditHeroesComponent {

}
