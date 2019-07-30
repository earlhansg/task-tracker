import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { HomeComponent } from '@app/home/containers/home/home.component';

// Modules
import { HomeRouting } from '@app/home/home-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    HomeRouting,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
