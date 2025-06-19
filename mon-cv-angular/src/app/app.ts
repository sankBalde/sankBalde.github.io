import { Component } from '@angular/core';
// Import your new components
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true, // <--- Make sure this is true if it's a standalone component
  imports: [ // <--- ADD THEM HERE
    Header,
    About,
    Projects,
    Skills,
    Contact
    // If you still have RouterOutlet from previous steps and want to keep it,
    // you'd add RouterOutlet here too, but remove it if you're not using routing.
    // RouterOutlet // Remove this if you decided against routing for simplicity
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss' // Or styleUrl if you're using SCSS
})
export class App {
  title = 'mon-cv-angular'; // Or whatever title your app has
}