import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { AllChatComponent } from './all-chat/all-chat.component';
import { PrevChatComponent } from './prev-chat/prev-chat.component';
import { AdminComponent } from './admin/admin.component';


const route: Routes = [
  { path: 'chat/new', component: NewChatComponent },
  { path: 'chat/active', component: ActiveChatComponent },
  { path: 'chat/previous', component: PrevChatComponent },
  { path: 'chat/all', component: AllChatComponent },
  { path: 'chat/admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    ActiveChatComponent,
    NewChatComponent,
    AllChatComponent,
    PrevChatComponent,
    AdminComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ChatModule {}
