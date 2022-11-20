import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
  
})
export class MomentosPage implements OnInit {
  // Optional parameters to pass to the swiper instance.
  // See https://swiperjs.com/swiper-api for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  vid = "https://www.youtube.com/embed/NmEZcBKRavs";
  vid2 = "https://www.youtube.com/embed/ExyjNNojyFk";
  vid3 = "https://www.youtube.com/embed/NnyX76MtvqA";

  constructor(private animationCtrl: AnimationController, private dom: DomSanitizer) {}

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  sanitize2(vid2){
    return this.dom.bypassSecurityTrustResourceUrl(vid2);
  }

  sanitize3(vid3){
    return this.dom.bypassSecurityTrustResourceUrl(vid3);
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  ngOnInit() {
  }

}
