import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { HelloComponent } from './hello.component';
import { SearchArtistsPipe } from './search-artists.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    HelloComponent,
    SearchArtistsPipe,
    ArtistDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
