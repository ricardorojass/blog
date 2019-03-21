import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../core';
// import { User } from 'src/app/core/models';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => this.currentUser = userData
    );
  }

}
