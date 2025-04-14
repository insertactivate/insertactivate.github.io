import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component"
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Church } from '../shared/church.model';
import { CHURCHES } from '../shared/churches';

@Component({
  selector: 'app-church',
  imports: [ FooterComponent ],
  templateUrl: './church.component.html',
  styleUrl: './church.component.css'
})
export class ChurchComponent implements OnInit {

  church: Church | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    /* URL router links generated with parts set to lower case; make sure to match against lower case variant. */
    const location = this.route.snapshot.paramMap.get('location');
    const name = this.route.snapshot.paramMap.get('name');
    this.church = CHURCHES.find(church => church.location.toLowerCase() === location && church.name.toLowerCase() === name);
  }
}
