import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing_array, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ResultImportComponent } from './result-import/result-import.component';
import { ResultDisplayComponent } from './result-display/result-display.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routing_array,
    HomeComponent,
    ProfileStudentComponent,
    ResultImportComponent,
    ResultDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
