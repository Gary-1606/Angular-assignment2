import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../guard/auth.guard";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private userService: UserService, private router: Router) {}

  createLoginFormControls() {
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]);
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {
    this.createLoginFormControls();
    this.createLoginForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.isLoggedIn = true;
      this.router.navigate(["/dashboard"]);
      this.loginForm.reset();
    }
  }
}
