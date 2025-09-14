import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSnackBarModule
    ],
    templateUrl: '../pages/contact/contact.html',
    styleUrls: ['../pages/contact/contact.css']
})
export class ContactComponent {
    contactForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.contactForm.invalid) return;

        const formData = new FormData();
        formData.append('name', this.contactForm.value.name);
        formData.append('email', this.contactForm.value.email);
        formData.append('message', this.contactForm.value.message);

        fetch('https://formspree.io/f/xjkedvwv', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    this.contactForm.reset();
                    this.submitted = false;
                    this.snackBar.open('Messaggio inviato con successo!', 'Chiudi', {
                        duration: 4000, // dura 4 secondi
                        horizontalPosition: 'center',
                        verticalPosition: 'bottom'
                    });
                } else {
                    this.snackBar.open('Errore durante l\'invio, riprova.', 'Chiudi', { duration: 4000 });
                }
            })
            .catch(() => {
                this.snackBar.open('Errore durante l\'invio, riprova.', 'Chiudi', { duration: 4000 });
            });
    }
}
