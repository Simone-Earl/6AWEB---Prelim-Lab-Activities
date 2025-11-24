import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demo"
  title = "My First App!"
  description = "This is my new Angular Application"

  imageUrl = 'https://archives.bulbagarden.net/media/upload/e/e2/0906Sprigatito.png';
  w = 150;
  h = 150;
  altText = 'Sprigatito Pokemon';
  textColor='lime';
  isHighlighted = true;
  yourName='';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;

  }
}
