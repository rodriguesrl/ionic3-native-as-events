import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NativeEventsProvider } from '../../providers/native-events/native-events';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  msg;

  constructor(
    public navCtrl: NavController,
    public native: NativeEventsProvider,
    public events: Events
  ){}

  toast(msg, time, position) {
    this.events.publish('toast', msg, time, position);
  }

  clipboard(msg) {
    this.events.publish('clipboard', msg);
  }

  socialShare(msg) {
    this.events.publish('socialShare', msg);
  }

  nativeStorage(msg) {
    this.events.publish('nativeStorage', msg);
  }

  inAppBrowser(msg) {
    this.events.publish('inAppBrowser', msg);
  }

  datePicker(msg) {
    this.events.publish('datePicker', msg);
  }

  camera(msg) {
    this.events.publish('camera', msg);
  }

  flashlight(msg) {
    this.events.publish('flashlight', msg);
  }
}
