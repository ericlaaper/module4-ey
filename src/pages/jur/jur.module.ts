import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JurPage } from './jur';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    JurPage,
  ],
  imports: [
    IonicPageModule.forChild(JurPage),
    ComponentsModule
  ],
})
export class JurPageModule {}
