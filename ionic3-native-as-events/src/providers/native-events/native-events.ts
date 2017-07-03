import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

//Plugins
import { Toast } from '@ionic-native/toast';
import { Clipboard } from '@ionic-native/clipboard';

@Injectable()
export class NativeEventsProvider {

  constructor(
    private events: Events,
    private toast: Toast,
    private clipboard: Clipboard
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
      this.clipboard.copy('aeHOOOOOO').then(data => {
        console.log("entrou");
        console.log(data);
      }, error => {
        console.log("errou");
        console.log(error);
      });
      console.log("passou");
      //this.events.publish('toast', 'Copied to Clipboard', 5000, 'bottom');
    })
  }

  socialShareEvent(){
    this.events.subscribe('socialShare', (msg) => {
      console.log(msg)
    })
  }

  nativeStorageEvent(){
    this.events.subscribe('nativeStorage', (msg) => {
      console.log(msg);
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
