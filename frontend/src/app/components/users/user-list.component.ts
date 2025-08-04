import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list', // cum va fi numită componenta în alte locuri
  standalone: true, // înseamnă că această componentă nu are nevoie de declarare într-un AppModule
  imports: [CommonModule], // Importă funcționalități de bază precum *ngIf, *ngFor
  templateUrl: './user-list.component.html', //
})
export class UserListComponent {
  users: User[] = []; // array gol de utilizatori, inițial

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
// Observable = flux de date asincron, folosit masiv în Angular

// subscribe() = metoda prin care "ascultăm" un flux

// HttpClient.get() → întotdeauna returnează Observable pentru a nu bloca aplicația