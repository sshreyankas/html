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
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {DetailsService} from './details.service';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';


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
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientJsonpModule
    
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
