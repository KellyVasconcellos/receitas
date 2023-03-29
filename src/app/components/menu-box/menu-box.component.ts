import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss']
})
export class MenuBoxComponent {

  @Input() icone = '';
  @Input() nome = '';
  @Input() resumo = '';
}
