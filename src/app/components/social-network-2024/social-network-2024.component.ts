import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-network-2024',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './social-network-2024.component.html',
  styleUrl: './social-network-2024.component.scss'
})
export class SocialNetwork2024Component {
  public brands: any = {
    whatsapp: faWhatsapp,
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faTwitter,
    tiktok: faTiktok,
    youtube: faYoutube
  }
}
