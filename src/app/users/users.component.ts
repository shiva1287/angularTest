import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  isLoading: boolean;

  constructor(private userService: UserService) {
    this.isLoading = false;
  }

  ngOnInit(): void {}

  fetchUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      this.isLoading = false;
    });
  }
  addNewUser(name: string, email: string, phone: string, address: string) {
    let newUser = { name, email, phone, address };
    this.userService.addUser(newUser).subscribe((response) => {
      Swal.fire('data added successfully');
      this.fetchUsers();
    });
  }
  delete(id: any) {
    this.userService.deleteUser(id).subscribe((response) => {
      Swal.fire('data deleted successfully');
      this.fetchUsers();
    });
  }
}
