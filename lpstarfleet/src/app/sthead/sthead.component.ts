import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sthead',
  templateUrl: './sthead.component.html',
  styleUrls: ['./sthead.component.scss']
})
export class StheadComponent implements OnInit {

  constructor() { }
  onContact() {
    alert("Bonjour xelo");
  }

  ngOnInit() {
  }

}
