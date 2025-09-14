import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
    selector: 'app-work-experience',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule],
    templateUrl: "../pages/work-experience/work-experience.html",
    styleUrl: "../pages/work-experience/work-experience.css"
})
export class WorkExperience { }
