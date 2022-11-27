import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { PokerCardComponent } from './components/poker-card/poker-card.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { MemberComponent } from './member/member.component';
import { ArrangeComponent } from './arrange/arrange.component';
import { KnowProcessComponent } from './know-process/know-process.component';
import { TestProcessComponent } from './test-process/test-process.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CompleteComponent } from './complete/complete.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { ListPokerCardComponent } from './components/list-poker-card/list-poker-card.component';
import { DragAndDropModule } from 'angular-draggable-droppable';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuideComponent,
    ButtonComponent,
    DialogComponent,
    PokerCardComponent,
    ToDoListComponent,
    MemberComponent,
    ArrangeComponent,
    KnowProcessComponent,
    TestProcessComponent,
    FeedbackComponent,
    CompleteComponent,
    ListPokerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SortablejsModule.forRoot({animation: 150}),
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
