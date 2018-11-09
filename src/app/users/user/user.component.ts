import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { } // access to currently loaded route

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    console.log(this.user);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
        console.log('Params changed!');
      }
    );
  }

  ngOnDestroy() {
    // You do not need to do this, Angular takes care of this implicitly.
    // This is just shown as an example of what you'd need to do explicitly.
    this.paramsSubscription.unsubscribe();

    // However, if you create your own observables, you're responsible for their destruction.
  }

}
