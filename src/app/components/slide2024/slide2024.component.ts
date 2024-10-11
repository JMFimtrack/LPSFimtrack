import { Component } from '@angular/core';

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
  selector: 'slide2024',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './slide2024.component.html',
  styleUrl: './slide2024.component.scss'
})
export class Slide2024Component {
  public brands: any = {
    whatsapp: faWhatsapp,
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faTwitter,
    tiktok: faTiktok,
    youtube: faYoutube
  }
  public icons: any = {
    mouse: faArrowPointer
  }
}
