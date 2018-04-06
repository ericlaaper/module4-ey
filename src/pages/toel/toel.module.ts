import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToelPage } from './toel';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ToelPage,
  ],
  imports: [
    IonicPageModule.forChild(ToelPage),
    ComponentsModule
  ],
})
export class ToelPageModule {}
