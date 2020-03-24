import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker, polyline, LatLng  } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
declare var L: any;
@Component({
  selector: 'app-se-reperer',
  templateUrl: './se-reperer.page.html',
  styleUrls: ['./se-reperer.page.scss'],
})

export class SeRepererPage   {
  ports: Port[];
  port: Port;
map: Map;
marker:any;
latlong= [];
  
  
  constructor(private geolocation:Geolocation) {
    this.ports = [
      { id: 1, name: "ENSIM" },
      { id: 2, name: 'EVE' },
      { id: 3, name: 'Navlakhi' }
    ];
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    if(event.component.value=="ENSIM"){
      this.showMarker([48.019044, 0.157550]," ENSIM !");
    this.map.setView([48.019044, 0.157550],25);
  
  }
  else if(event.component.value=="EVE"){
    this.showMarker([48.017554, 0.161096]," EVE !");
  this.map.setView([48.017554, 0.161096],25);

}
    else { 
      this.showMarker([48.017554, 0.161096],event.component.value);
      this.map.setView([48.017554, 0.161096],25);}
  }
  
  ionViewDidEnter(){
    this.showMap();
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors'
  }).addTo(this.map);
  }
  getPositions(){
    this.geolocation.getCurrentPosition({enableHighAccuracy : true }).then((res)=>{
     return this.latlong=[res.coords.latitude,res.coords.longitude]
    }).then((latLng)=>{
      this.showMarker(latLng,"Hey, Je suis içi !");
      this.map.setView([this.latlong[0],this.latlong[1]],25);
    });
   

  }
showMap(){
  this.map = L.map('myMap').setView([0.199556,48.00611],10);
  tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
}
  showMarker(latlong,s){
    this.marker = marker(latlong);
    this.marker.addTo(this.map).bindPopup(s);
  }

  locate(event){
    if(event.detail.value=="ENSIM"){
      this.showMarker([48.019044, 0.157550]," ENSIM !");
    this.map.setView([48.019044, 0.157550],25);
  
  }
  else if(event.detail.value=="EVE"){
    this.showMarker([48.017554, 0.161096]," EVE !");
  this.map.setView([48.017554, 0.161096],25);

}
else if(event.detail.value=="IUT"){
  this.showMarker([48.017554, 0.161096]," IUT !");
this.map.setView([48.017554, 0.161096],25);

}
else if(event.detail.value=="RU_Bartholdi"){
  this.showMarker([48.018826, 0.154134]," RU Bartholdi !");
this.map.setView([48.018826, 0.154134],25);

}
else if(event.detail.value=="RU_Vaurouze"){
  this.showMarker([48.015376, 0.165231],"  RU Vaurouze !");
this.map.setView([48.015376, 0.165231],25);

}
else if(event.detail.value=="CampusRibay"){
  this.showMarker([48.015729, 0.161426],"  RU Vaurouze !");
this.map.setView([48.015729, 0.161426],25);

}
else if(event.detail.value=="Universite"){
  this.showMarker([48.017032, 0.151717],"  RU Vaurouze !");
this.map.setView([48.017032, 0.151717],25);

}
  }
}
class Port {
  public id: number;
  public name: string;
}

