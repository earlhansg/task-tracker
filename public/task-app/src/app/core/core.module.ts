import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth/auth.service';

// import { AuthInterceptor } from '@app/core/auth/auth.interceptor';


@NgModule({
  imports: [],
  providers: [AuthService]
})
export class CoreModule {}
