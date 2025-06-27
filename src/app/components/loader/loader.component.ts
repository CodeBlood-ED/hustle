import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit{

  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(()=> { 
    this.route.navigate(['/home']);
    }, 8000);
  }
}
