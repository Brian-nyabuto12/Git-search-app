import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
// import { SearchComponent } from './search/search.component';
import { UserComponent } from './users/users.component';

const routes: Routes = [

  {path: 'user', component: UserComponent},
  {path: 'repo', component: RepoComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
