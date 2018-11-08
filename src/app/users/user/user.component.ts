import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { } // access to currently loaded route

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    console.log(this.user);
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
        console.log('Params changed!');
      }
    );
  }

}
