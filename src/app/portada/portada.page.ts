import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  vid = "https://www.youtube.com/embed/bx9DZ9gDmeo";
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

}
