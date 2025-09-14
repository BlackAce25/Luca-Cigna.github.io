import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatExpansionModule],
    templateUrl: "../pages/skills/skills.html",
    styleUrl: "../pages/skills/skills.css"
})
export class Skills { }
