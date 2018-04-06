import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoguitPage } from './loguit';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoguitPage,
  ],
  imports: [
    IonicPageModule.forChild(LoguitPage),
    ComponentsModule
  ],
})
export class LoguitPageModule {}
