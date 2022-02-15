import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRequestComponent } from './get-request/get-request.component';
import { GetRequestTypeBasedComponent } from './get-request-type-based/get-request-type-based.component';
import { GetRequestErrorHandlingComponent } from './get-request-error-handling/get-request-error-handling.component';
import { GetRequestHeadersComponent } from './get-request-headers/get-request-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    GetRequestComponent,
    GetRequestTypeBasedComponent,
    GetRequestErrorHandlingComponent,
    GetRequestHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
