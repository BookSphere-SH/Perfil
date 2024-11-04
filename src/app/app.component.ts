import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Perfil';
  options = [
    { path: '/store', icon: 'library_books', title: 'Store'},
    { path: '/library', icon: 'home', title: 'Library'},
    { path: '/community', title: 'Community'},
    { path: '/friends', title: 'Friends'}
  ];
}
