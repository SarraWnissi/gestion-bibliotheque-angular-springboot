import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  cats: any = [];

  constructor(private ser: Service) {
    this.getCats();
  }

  getCats() {
    this.ser.getCategories().subscribe({
      next: (data) => {
        this.cats = data;
      },
      error: (err) => {},
    });
  }
}
