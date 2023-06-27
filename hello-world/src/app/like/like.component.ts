import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() likeCount = 0;
  @Input() isActive = true;

  color = 'gray';

  onClicked() {
    if (!this.isActive) {
      this.isActive = true;
      this.likeCount++;
      this.color = 'deeppink';
    } else {
      this.isActive = false;
      this.likeCount--;
      this.color = 'gray';
    }
  }
}
