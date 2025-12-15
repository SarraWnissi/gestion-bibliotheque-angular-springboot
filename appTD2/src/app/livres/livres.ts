import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-livres',
  standalone: false,
  templateUrl: './livres.html',
  styleUrl: './livres.css',
})
export class Livres {
  livs: any = [];
  constructor(private serv: Service, private act: ActivatedRoute) {
    this.getLivs(this.act.snapshot.params['id']);
  }
  getLivs(id: number) {
    this.serv.getLivres(id).subscribe({
      next: (data) => {
        this.livs = data;
      },
    });
  }
}
