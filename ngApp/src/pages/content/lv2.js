"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var filePath = "build/pages/content/sample.html";
var Lv2 = (function () {
    function Lv2(navController) {
        this.navController = navController;
    }
    Lv2.prototype.view1 = function () {
        ionic_native_1.InAppBrowser.open(filePath, '_blank', 'location=yes');
    };
    Lv2 = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/content/lv2.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], Lv2);
    return Lv2;
}());
exports.Lv2 = Lv2;
