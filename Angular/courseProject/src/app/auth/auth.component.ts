import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if(!form.valid) {
            return;
        }

        this.isLoading = true;

        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        if(this.isLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.onSignUp(email, password);
        }

        authObs.subscribe({
            next: (v) => {
                this.isLoading=false;
                this.router.navigate(['/recipes']); 
                console.log(v);
            },
            error: (errorMessage) => {
                this.isLoading=false;
                console.log(errorMessage);
                this.error = errorMessage;
            },
            complete() {
                console.info('complete');
            },
        });

        form.reset();
        
    }
}