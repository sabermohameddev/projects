import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  professions = [
    {
      "value": 1,
      "label": "frontend"
    },
    {
      "value": 2,
      "label": "back"
    },
    {
      "value": 3,
      "label": "full"
    },
    
  ]
}
