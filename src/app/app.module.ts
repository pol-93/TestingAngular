import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UtilsModule } from './utils/utils.module';
import { NotFoundModuleModule } from './not-found-module/not-found-module.module';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    NotFoundModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TerminalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
