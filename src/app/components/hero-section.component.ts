import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: "../pages/hero-section/hero-section.html",
  styleUrl: "../pages/hero-section/hero-section.css"
})
export class HeroSection { }
