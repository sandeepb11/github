import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formData : NgForm){
    const {email,password} = formData.form.value;
    this.auth.signin(email,password).then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success('Logged in successfully')
    }).catch((Err)=>{
      console.log(Err.message);
      this.toastr.error('Failed to login');
    })
  }

}
