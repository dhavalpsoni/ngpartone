import { BrowserModule } from '@angular/platform-browser';
import {ItemService} from './item.service'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaticInfoComponent } from './static-info/static-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaticInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
