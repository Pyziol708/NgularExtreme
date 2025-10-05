import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { LoginFormComponent } from './shared/components';
import { ResetPasswordFormComponent } from './shared/components';
import { CreateAccountFormComponent } from './shared/components';
import { ChangePasswordFormComponent } from './shared/components';

export const routes: Routes = [
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tasks',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', redirectTo: 'tasks' },
];
