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
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';  



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routing_array,
    HomeComponent,
    ProfileStudentComponent,
    ResultImportComponent,
    ResultDisplayComponent,
    LoginStaffComponent,
    LoginAdminComponent
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
    HttpClientJsonpModule,
    // FormsModule
 
    ReactiveFormsModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
