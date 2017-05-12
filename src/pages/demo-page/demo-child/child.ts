/**
 * Created by Jasper on 2017/5/11.
 */
import {Component,OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
@Component({
  selector:'child',
  templateUrl: 'child.html'
})
export class ChildPage implements OnInit {

  message: any;
  constructor(public navCtr:NavController,public navParams:NavParams) {
    this.message = navParams.get('msgToChild');
    console.log(this.message);
  }

  ngOnInit(){

  }
}
