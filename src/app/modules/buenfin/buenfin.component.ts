import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'buenfin',
  standalone: true,
  imports: [],
  templateUrl: './buenfin.component.html',
  styleUrl: './buenfin.component.scss'
})
export class BuenfinComponent {
  private router = inject(Router);

  ngOnInit() {
    this.router.navigate(['/buen/2024'])
  };
}
