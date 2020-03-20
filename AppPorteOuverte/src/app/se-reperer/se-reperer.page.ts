import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker, polyline, LatLng } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-se-reperer',
  templateUrl: './se-reperer.page.html',
  styleUrls: ['./se-reperer.page.scss'],
})
export class SeRepererPage  {

map: Map;
marker:any;
latlong= [];
  
  
  constructor(private geolocation:Geolocation) {}
  ionViewDidEnter(){
    this.showMap();
  }
  getPositions(){
    this.geolocation.getCurrentPosition({enableHighAccuracy : true }).then((res)=>{
     return this.latlong=[res.coords.latitude,res.coords.longitude]
    }).then((latLng)=>{
      this.showMarker(latLng);
    });
  }
showMap(){
  this.map = new Map('myMap').setView([0.199556,48.00611],10);
  tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
}
  showMarker(latlong){
    this.marker = marker(latlong);
    this.marker.addTo(this.map).bindPopup('Hey, i am here');
  }

}

