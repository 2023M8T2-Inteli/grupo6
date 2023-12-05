// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    newMessage: string = '';
    messages: { text: string, sent: boolean }[] = [
        { text: "Hello!", sent: false },
        { text: "Hi there!", sent: true }
    ];

    sendMessage() {
        if (this.newMessage.trim() !== '') {
            this.messages.push({ text: this.newMessage, sent: true });
            this.newMessage = '';
        }
    }
}
