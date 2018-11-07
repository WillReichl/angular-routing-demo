import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['servers']); // unlike routerLink, navigate does not know current path by default, works from root
    // this.router.navigate(['servers', { relativeTo: this.route }]); // can change relative starting point
  }

}
