import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-whoami',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
    templateUrl: "../pages/whoami/whoami.html",
    styleUrl: "../pages/whoami/whoami.css"
})
export class WhoAmI { }
