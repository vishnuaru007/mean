import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/components/list/movie.list.component';
import { MovieAddComponent } from './movie/components/add/movie.add.component';
import { MovieEditComponent } from './movie/components/edit/movie.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieEditComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
