import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

var filePath = "sample.html";

@Component({
  templateUrl: 'lv4.html'
})
export class Lv4 {

  constructor(private navController: NavController) {
  }

  view1() {
          let browser = new InAppBrowser('https://github.com/nikhilknoldus/AngularJs-2/blob/master/Code_Snippets', '_system');
        }
}
