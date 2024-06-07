import { Component, Input } from '@angular/core';

@Component({
  selector: 'matific-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrl: './block-ui.component.scss'
})
export class BlockUiComponent {
  @Input() isBlocked = false;

}
