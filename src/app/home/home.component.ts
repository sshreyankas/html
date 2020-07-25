import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LoginStaffComponent } from '../login-staff/login-staff.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog()
  {
    this.dialog.open(LoginComponent);

  }

  openDialog1()
  {
    this.dialog.open(LoginStaffComponent);

  }

  openDialog2()
  {
    this.dialog.open(LoginAdminComponent);

  }

}
