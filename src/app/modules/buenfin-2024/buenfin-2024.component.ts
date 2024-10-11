import { Component } from '@angular/core';

import { SocialNetwork2024Component } from "../../components/social-network-2024/social-network-2024.component";
import { Slide2024Component } from "../../components/slide2024/slide2024.component";
import { Services2024Component } from "../../components/services-2024/services-2024.component";
import { Warnings2024Component } from "../../components/warnings-2024/warnings-2024.component";

@Component({
  selector: 'buenfin-2024',
  standalone: true,
  imports: [
    SocialNetwork2024Component,
    Slide2024Component,
    Services2024Component,
    Warnings2024Component
  ],
  templateUrl: './buenfin-2024.component.html',
  styleUrl: './buenfin-2024.component.scss'
})
export class Buenfin2024Component {
}
