import {Component, computed, model, signal} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-auto-suggestion-chip-email',
    imports: [MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule],
    templateUrl: './auto-suggestion-chip-email.component.html',
    styleUrl: './auto-suggestion-chip-email.component.css'
})
export class AutoSuggestionChipEmailComponent {
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    readonly currentEmail = model('');
    readonly listOfEmail = signal(['shamin@lemon.com']);
    readonly allEmails: string[] = ['shamin@apple.com', 'shamin@lemon.com', 'asfaq@lime.com', 'asfaq@orange.com', 'rafi@strawberry.com'];
    readonly filteredEmails = computed(() => {
        const currentEmail = this.currentEmail().toLowerCase();
        return currentEmail
            ? this.allEmails.filter(email => email.toLowerCase().includes(currentEmail))
            : this.allEmails.slice();
    });

    constructor(private announcer: LiveAnnouncer) {
    }

    // @ts-ignore
    // readonly announcer = inject(LiveAnnouncer);

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.listOfEmail.update(fruits => [...fruits, value]);
        }

        // Clear the input value
        this.currentEmail.set('');
    }

    remove(fruit: string): void {
        this.listOfEmail.update(emails => {
            const index = emails.indexOf(fruit);
            if (index < 0) {
                return emails;
            }

            emails.splice(index, 1);
            // @ts-ignore
            this.announcer.announce(`Removed ${fruit}`);
            return [...emails];
        });
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.listOfEmail.update(fruits => [...fruits, event.option.viewValue]);
        this.currentEmail.set('');
        event.option.deselect();
    }
}
