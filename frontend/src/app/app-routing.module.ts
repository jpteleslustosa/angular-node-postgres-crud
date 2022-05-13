import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ListReferencesComponent } from './components/list-references/list-references.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: DetailUserComponent },
  { path: 'list-references', component: ListReferencesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }