import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { SingerFormComponent } from './singer-form/singer-form.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { OrderBySingerPipe } from './pipe/order-by-singer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingerListComponent,
    SingerFormComponent,
    OrderBySingerPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
