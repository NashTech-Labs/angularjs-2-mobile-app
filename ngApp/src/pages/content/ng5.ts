import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { InAppBrowser } from 'ionic-native';


@Component({

  templateUrl: 'ng5.html'

})

export class Ng5{

  constructor(private navController:NavController){}

  launch() {
            let browser = new InAppBrowser('https://angular.io/docs/ts/latest/quickstart.html', '_system');
        }
     }
