import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import {
  AppInfoService,
  AuthGuardService,
  AuthService,
  ScreenService,
  TaskService,
} from './shared/services';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          if (!req.url.startsWith('http')) {
            req = req.clone({ url: environment.apiUrl + req.url });
          }
          return next(req);
        },
      ])
    ),
    AuthGuardService,
    AuthService,
    ScreenService,
    AppInfoService,
    TaskService,
  ],
};
