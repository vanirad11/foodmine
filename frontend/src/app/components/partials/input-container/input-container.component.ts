import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {
@Input() label!: String;
@Input() bgColor='white';
}
