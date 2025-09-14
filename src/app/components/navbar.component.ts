import { Component, HostListener, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
    templateUrl: '../pages/navbar/navbar.html',
    styleUrls: ['../pages/navbar/navbar.css']
})
export class Navbar implements AfterViewInit {
    menuOpen = false;
    isSticky = false;
    navbarHeight = 0;
    mobileBreakpoint = 768;

    constructor(private renderer: Renderer2) { }

    ngAfterViewInit() {
        const nav = document.querySelector('.nav-height') as HTMLElement;
        if (nav) this.navbarHeight = nav.offsetHeight;
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const hero = document.getElementById('hero-section');
        const nav = document.querySelector('.nav-height') as HTMLElement;
        if (!hero || !nav) return;

        const heroBottom = hero.getBoundingClientRect().bottom;
        this.isSticky = heroBottom <= nav.offsetHeight;
    }

    @HostListener('window:resize', [])
    onResize() {
        if (window.innerWidth > this.mobileBreakpoint) this.closeMenu();
    }

    toggleMenu() {
        this.menuOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu() {
        this.menuOpen = true;
        this.renderer.setStyle(document.body, 'overflow', 'hidden');

        // Imposta dinamicamente la posizione top del dropdown sotto la navbar
        const nav = document.querySelector('.nav-height') as HTMLElement;
        const dropdown = document.querySelector('.mobile-dropdown') as HTMLElement;
        if (nav && dropdown) {
            const top = nav.offsetHeight + window.scrollY; // subito sotto la navbar
            this.renderer.setStyle(dropdown, 'position', 'absolute');
            this.renderer.setStyle(dropdown, 'top', `${top}px`);
            this.renderer.setStyle(dropdown, 'left', '0');
            this.renderer.setStyle(dropdown, 'width', '100%');
            this.renderer.setStyle(dropdown, 'z-index', '1099'); // sotto navbar sticky
        }
    }

    closeMenu() {
        this.menuOpen = false;
        // Ripristina lo scroll
        this.renderer.removeStyle(document.body, 'overflow');
    }

    scrollToSection(id: string) {
        const el = document.getElementById(id);
        const nav = document.querySelector('.nav-height') as HTMLElement;
        if (!el || !nav) return;

        const offset = nav.offsetHeight;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: 'smooth' });

        // Chiudi il menu se era aperto
        if (this.menuOpen) this.closeMenu();
    }

    scrollToWhoAmI() { this.scrollToSection('whoami-section'); }
    scrollToSkills() { this.scrollToSection('skills-section'); }
    scrollToExperience() { this.scrollToSection('experience-section'); }
    scrollToContactMe() { this.scrollToSection('contactMe-section'); }
}
