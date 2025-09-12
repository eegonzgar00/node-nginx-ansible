import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RickMortyService } from './services/rickmorty.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent   // <-- Aquí importas el componente standalone
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
