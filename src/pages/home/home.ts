import { Component } from '@angular/core';
import { NavController,PopoverController  } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {

  }
  presentPopover() {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present();
  }
}
