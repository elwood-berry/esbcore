import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialLibraryModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
