import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
long:number = 0;
lat:number = 0;
time:number = 0;

stories:any[]=[];
  constructor() {}
  
  async getGPS(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current position: ");

    this.time = coordinates.timestamp;
    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;

  }

  async openBrowser() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
    };
}
