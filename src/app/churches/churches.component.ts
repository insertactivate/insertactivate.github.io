import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHURCHES } from './shared/churches';

@Component({
  selector: 'app-churches',
  imports: [ RouterLink ],
  templateUrl: './churches.component.html',
  styleUrl: './churches.component.css'
})
export class ChurchesComponent {
  churches = CHURCHES;
}
