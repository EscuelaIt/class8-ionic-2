import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Camera, Geolocation } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  image: string;

  constructor(private navCtrl: NavController) {

  }

  takePicture(){
    let options = {
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }

    Camera.getPicture( options )
    .then(imageData =>{
      this.image = 'data:image/jpeg;base64,' + imageData;
    });
  }

  getPosition(){
    console.log("click");
    Geolocation.getCurrentPosition()
    .then(rta =>{
      console.log(rta);
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
