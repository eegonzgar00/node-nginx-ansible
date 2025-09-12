import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickMortyService } from './services/rickmorty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  characters: any[] = [];
  searchTerm: string = '';

  constructor(private api: RickMortyService) {}

  ngOnInit() {
    this.api.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

  get filteredCharacters() {
    return this.characters.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
