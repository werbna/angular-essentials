import { Component, Input, input, Output, EventEmitter, output, computed  } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(() => {
    return `assets/users/` + this.avatar();
  });

  // get imagePath() {
  //   return `assets/users/` + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.id());
  }
}
