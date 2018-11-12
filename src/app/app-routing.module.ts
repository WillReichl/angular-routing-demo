import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: 'servers', component: ServersComponent, children: [
            { path: ':id', component: ServerComponent }, // child route omits the parent, "/servers" is assumed
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' } // wildcard route, catch all paths you don't know -- sequence of routes is important!
];  // Define our routes

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)  // Tell Angular about our Routes
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}