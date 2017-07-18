import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

//Plugins
import { Toast } from '@ionic-native/toast';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class NativeEventsProvider {

  constructor(
    private events: Events,
    private toast: Toast,
    private clipboard: Clipboard,
    private socialSharing: SocialSharing
  ){
    this.toastEvent();
    this.clipboardEvent();
    this.socialShareEvent();
    this.nativeStorageEvent();
    this.inAppBrowserEvent();
    this.datePickerEvent();
    this.cameraEvent();
    this.flashlightEvent();
  }

  toastEvent(){
    this.events.subscribe('toast', (msg, time, position) => {
      this.toast.show(msg, time, position).subscribe()
    })
  }

  clipboardEvent(){
    this.events.subscribe('clipboard', (msg) => {
      this.clipboard.copy(msg);
      this.events.publish('toast', 'Clipboard Plugin is Broken!', 2000, 'bottom');
    })
  }

  socialShareEvent(){
    this.events.subscribe('socialShare', (msg, subject, file, url) => {
      this.socialSharing.share(msg, subject, file, url);
    })
  }

  nativeStorageEvent(){
    this.events.subscribe('nativeStorage', (data) => {
      console.log(data);
    })
  }

  inAppBrowserEvent(){
    this.events.subscribe('inAppBrowser', (msg) => {
      console.log(msg);
    })
  }

  datePickerEvent(){
    this.events.subscribe('datePicker', (msg) => {
      console.log(msg);
    })
  }

  cameraEvent(){
    this.events.subscribe('camera', (msg) => {
      console.log(msg);
    })
  }

  flashlightEvent(){
    this.events.subscribe('flashlight', (msg) => {
      console.log(msg);
    })
  }
}
