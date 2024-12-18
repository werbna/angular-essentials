import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Passing an Object Type instead of having three Input Decorators
  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/` + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
