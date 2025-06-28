import { Component, OnInit } from '@angular/core';
import bootstrap from '../../../../main.server';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent{
  banner = [
    {
      id: 1,
      path: 'products/banner.png',
    },
    {
      id: 2,
      path: 'products/banner1.webp',
    },
    {
      id: 3,
      path: 'products/banner2.webp',
    },
  ];

}
