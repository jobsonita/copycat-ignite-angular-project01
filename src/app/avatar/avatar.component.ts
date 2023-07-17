import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {

  @Input() src!: string;
  @Input({ transform: booleanAttribute }) hideBorder = false;

}
