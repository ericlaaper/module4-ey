import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mod4astartPage } from './mod4astart';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    Mod4astartPage,
  ],
  imports: [
    IonicPageModule.forChild(Mod4astartPage),
    ComponentsModule
  ],
})
export class Mod4astartPageModule {}
