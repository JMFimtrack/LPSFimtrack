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


import { ServiceTable2024Component } from "../../components/service-table2024/service-table2024.component";
import { AdminTable2024Component } from "../../components/admin-table2024/admin-table2024.component";
import { GoCard2024Component } from "../../components/go-card2024/go-card2024.component";

@Component({
  selector: 'buenfin-2024',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ServiceTable2024Component,
    AdminTable2024Component,
    GoCard2024Component,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './buenfin-2024.component.html',
  styleUrl: './buenfin-2024.component.scss'
})
export class Buenfin2024Component {
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
