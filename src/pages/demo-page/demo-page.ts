/**
 * Created by Jasper on 2017/5/11.
 */
import {Component, OnInit} from '@angular/core';
import {LoggerService} from "./logger.service";
import {NavController} from "ionic-angular";
import {ChildPage} from "./demo-child/child";

@Component({
  templateUrl: 'demo-page.html'
})
export class DemoPage implements OnInit {
  private greeting: string;
  public isShowMore: boolean;
  private msgToChild: string;
  private sayHello:string;

  constructor(private navCtr: NavController, private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.greeting = 'hello!!!!!!';
    this.logger.debug("demo page 已经初始化完毕");
    this.msgToChild = 'message from parent';
    this.sayHello = 'hi childComponent';
  }

  sendToChildPage(msgToChild: string): void {
    this.navCtr.push(ChildPage, {msgToChild});
  }
}
