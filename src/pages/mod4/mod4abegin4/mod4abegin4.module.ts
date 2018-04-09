import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin4Page } from './mod4abegin4';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin4Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin4Page),
    ComponentsModule
  ],
})
export class Mod4abegin4PageModule {}
