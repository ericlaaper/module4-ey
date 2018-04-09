import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultaatPage } from './resultaat';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ResultaatPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultaatPage),
    ComponentsModule
  ],
})
export class ResultaatPageModule {}
