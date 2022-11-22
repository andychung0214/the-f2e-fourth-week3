import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PokerCardComponent } from './components/poker-card/poker-card.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'guide',
    component: GuideComponent
  },
  {
    path: 'poker-card',
    component: PokerCardComponent
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
