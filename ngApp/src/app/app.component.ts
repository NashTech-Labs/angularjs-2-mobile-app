import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AdMob } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { Sample } from '../pages/content/sample'

// import { Ng1 } from '../pages/content/ng1';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Index', component: Page1 },
      { title: 'References', component: Page2},
      { title: 'Contact', component: ContactPage},
      { title:'About', component:AboutPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

        interface AdMobType {
          banner: string,
          interstitial: string
        }

      var admobid : AdMobType;

         if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
           admobid = {
             banner: 'ca-app-pub-5724383886840960/6528595515', // or DFP format "/6253334/dfp_example_ad"
             interstitial: 'ca-app-pub-5724383886840960/8005328711'
           };
         } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
           admobid = {
             banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
             interstitial: 'ca-app-pub-xxx/kkk'
           };
         } else { // for windows phone
           admobid = {
             banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
             interstitial: 'ca-app-pub-xxx/kkk'
           };
         }
       // it will display smart banner at top center, using the default options
         if(AdMob) AdMob.createBanner({
           adId: admobid.banner,
           autoShow: true

           });

          if(AdMob) AdMob.prepareInterstitial({
            adId: admobid.interstitial,
             autoShow:true
            });
  });
}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
