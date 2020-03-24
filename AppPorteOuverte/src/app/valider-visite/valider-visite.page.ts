import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valider-visite',
  templateUrl: './valider-visite.page.html',
  styleUrls: ['./valider-visite.page.scss'],
})
export class ValiderVisitePage implements OnInit {

  id: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Set id value to a get parameter from a route
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
