import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
@Component({
  selector: 'app-se-reperer',
  templateUrl: './se-reperer.page.html',
  styleUrls: ['./se-reperer.page.scss'],
})
export class SeRepererPage implements OnInit {


  ngOnInit() {
  }

  map: Map;
  pickupLocation: string;
  constructor(private router:Router) {}
  onpickupClick(){
    this.router.navigate(['./pickup-location']);
  }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([39.9075000, 116.3972300], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([28.6, 77]).addTo(this.map)
      .bindPopup('Ionic 4 <br> Leaflet.')
      .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}

