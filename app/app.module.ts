import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { UserService } from './services/user.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService ]
})
export class AppModule { }
