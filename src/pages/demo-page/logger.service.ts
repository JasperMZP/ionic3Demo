import {Injectable} from "@angular/core";
/**
 * Created by Jasper on 2017/5/11.
 */
@Injectable()
export class LoggerService{
  constructor(){}
  debug(msg: string){
    console.log(msg);
  }
}
