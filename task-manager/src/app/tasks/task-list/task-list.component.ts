import { Component, OnInit } from '@angular/core';
import { catchError, finalize, groupBy, map, of, tap } from 'rxjs';
import { Task } from '../../core/interfaces';
import { TaskService } from '../../shared/services';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-task-list',
  imports: [DxDataGridModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  isLoading: boolean = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.isLoading = true;
    this.taskService
      .getTasks()
      .pipe(
        tap((t) => console.log(t.length ?? 0)),
        catchError((error) => {
          console.error(error);
          return of([]);
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((result) => {
        this.tasks = result;
      });
  }
}
