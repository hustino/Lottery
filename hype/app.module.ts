import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';

//routing


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
