import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
