import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { Ng1 } from '../pages/content/ng1';
import { Ng2 } from "../pages/content/ng2";
import { Ng3 } from "../pages/content/ng3";
import { Ng4 } from "../pages/content/ng4";
import { Ng5 } from "../pages/content/ng5";
import { Ng6 } from "../pages/content/ng6";

import { Lv1 } from "../pages/content/lv1";
import { Lv2 } from "../pages/content/lv2";
import { Lv3 } from "../pages/content/lv3";
import { Lv4 } from "../pages/content/lv4";
import { Lv5 } from "../pages/content/lv5";
import { Lv6 } from "../pages/content/lv6";

import { Sample } from '../pages/content/sample'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    AboutPage,
    ContactPage,
    Ng1,
    Ng2,
    Ng4,
    Ng3,
    Ng5,
    Ng6,
    Lv1,
    Lv2,
    Lv3,
    Lv4,
    Lv5,
    Lv6,
    Sample

  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    AboutPage,
    ContactPage,
    Ng1,
    Ng2,
    Ng4,
    Ng3,
    Ng5,
    Ng6,
    Lv1,
    Lv2,
    Lv3,
    Lv4,
    Lv5,
    Lv6,
    Sample
  ],
  providers: []
})
export class AppModule {}
