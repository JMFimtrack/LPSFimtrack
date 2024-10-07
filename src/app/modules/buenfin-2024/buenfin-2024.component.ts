import { Component } from '@angular/core';

import { ServiceTable2024Component } from "../../components/service-table2024/service-table2024.component";
import { AdminTable2024Component } from "../../components/admin-table2024/admin-table2024.component";
import { GoCard2024Component } from "../../components/go-card2024/go-card2024.component";

@Component({
  selector: 'buenfin-2024',
  standalone: true,
  imports: [
    ServiceTable2024Component,
    AdminTable2024Component,
    GoCard2024Component
  ],
  templateUrl: './buenfin-2024.component.html',
  styleUrl: './buenfin-2024.component.scss'
})
export class Buenfin2024Component {

}
