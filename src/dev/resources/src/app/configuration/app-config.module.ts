import { NgModule } from '@angular/core';
import { AppConfig, APP_DI_CONFIG } from './app.config';



@NgModule({
  providers: [{
    provide: AppConfig, useValue: APP_DI_CONFIG
}]
})
export class AppConfigModule { }
