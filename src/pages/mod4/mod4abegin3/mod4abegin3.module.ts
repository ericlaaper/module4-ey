import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin3Page } from './mod4abegin3';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin3Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin3Page),
    ComponentsModule
  ],
})
export class Mod4abegin3PageModule {}
