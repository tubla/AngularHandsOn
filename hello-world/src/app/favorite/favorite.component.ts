import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean = false; // 'isFavorite' - aliasing
  @Output() change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
}
