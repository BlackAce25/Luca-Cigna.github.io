import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HeroSection } from './components/hero-section.component';
import { Navbar } from './components/navbar.component';
import { WhoAmI } from './components/whoami.component';
import { Skills } from './components/skills-section.component';
import { WorkExperience } from "./components/work-experience";
import { ContactComponent } from "./components/contact.component";
import { Footer } from "./components/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    HeroSection,
    Navbar,
    WhoAmI,
    Skills,
    WorkExperience,
    ContactComponent,
    Footer
],
  templateUrl: 'app.component.html',
  styles: [`
    .container {
      max-width: 960px;
      margin: 2rem auto;
      padding: 1rem;
    }
  `]
})
export class AppComponent { }
