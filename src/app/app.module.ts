import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MomentModule } from 'ngx-moment';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './core/guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToursComponent } from './tours/tours.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

// Sockets...
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'ws://localhost:8100', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MomentModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
