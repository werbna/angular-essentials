import { Component, Input, input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string; 
  avatar = input.required<string>();
  name = input.required<string>();

  get imagePath() {
    return `assets/users/` + this.avatar;
  }

  onSelectUser() {}
}
