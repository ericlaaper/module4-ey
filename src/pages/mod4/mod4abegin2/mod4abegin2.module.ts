import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin2Page } from './mod4abegin2';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin2Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin2Page),
    ComponentsModule
  ],
})
export class Mod4abegin2PageModule {}
