import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'go-card2024',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './go-card2024.component.html',
  styleUrl: './go-card2024.component.scss'
})
export class GoCard2024Component {
  redirect(): void {
    window.location.href = 'https://www.google.com/';
  };
}
