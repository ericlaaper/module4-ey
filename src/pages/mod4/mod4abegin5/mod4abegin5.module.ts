import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4abegin5Page } from './mod4abegin5';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4abegin5Page,
  ],
  imports: [
    IonicPageModule.forChild(Mod4abegin5Page),
    ComponentsModule
  ],
})
export class Mod4abegin5PageModule {}
