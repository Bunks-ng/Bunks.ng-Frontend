import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {firebase} from 'firebaseui-angular';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) {
  }
  @Input() user;

  ngOnInit() {
  }
  signOut() {
    firebase.auth().signOut()
      .then(() => this.router.navigate(['/auth/sign-in'])).then(
      // @ts-ignore
      this.removeUserMenu()
    );
  }

  removeUserMenu() {
    this.menuService.removeUserMenu();
  }
}
