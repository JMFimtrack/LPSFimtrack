import { Component } from '@angular/core';

import { PortfolioCampaignComponent } from "../portfolio-campaign/portfolio-campaign.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PortfolioCampaignComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public title: string = 'LSPFimtrack';
  public cards: any[] = [
    {
      title: "Buen Fin",
      avatar: "avatar",
      cards: [
        {
          title: 'This is the card',
          subtitle: 'Buen Fin',
          qr: '/qr.png',
          text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          route: '/buen/2024'
        }
      ]
    },
  ];
}
