import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';


@Component({
  templateUrl: 'sample.html'
})
export class Sample {

  constructor(private navController: NavController) {
  }
}
