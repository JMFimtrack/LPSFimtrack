import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'portfolio-campaign',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './portfolio-campaign.component.html',
  styleUrl: './portfolio-campaign.component.scss'
})
export class PortfolioCampaignComponent {
  public title: string = 'Portfolio Campaign';
  public cards: any[] = [
    {
      title: "Buen Fin",
      avatar: "avatar",
      cards: [
        {
          title: 'Campaña 2024 Buen Fin',
          subtitle: 'Buen Fin',
          qr: 'qr.png',
          text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          route: '/buen/2024'
        }
      ]
    },
  ];

  redirect() {
    window.location.href = "https://jmfimtrack.github.io/buen/2024";
  };
}
