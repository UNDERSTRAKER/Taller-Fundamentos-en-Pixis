import {Application} from 'pixi.js';
import Triangle from "./Triangle";
import {FederatedPointerEvent} from "@pixi/events";
import Circle from "./Circle";
import TimerFijo from "./TimerFijo";
import Rect from "./Rect";

export default class Canvas {
  private app: Application;
  protected mouseX: number = 0;
  protected mouseY: number = 0;

  public random(min: number, max:number): number {
    const intervalo: number = max - min;
    const valor: number = Math.floor(Math.random() * intervalo);
    const valorFinal: number = valor + min;
    return valorFinal;

  }

  constructor(
    width: number,
    height: number,
    backgroundColor: number = 0xFFFFFF,
    element: HTMLElement = document.body
  ) {
    this.app = new Application({width, height, backgroundColor, antialias: true});
    this.app.ticker.minFPS = 60;
    this.app.ticker.maxFPS = 120;

    this.app.stage.interactive = true;
    this.app.stage.on('pointermove', (event: FederatedPointerEvent) => {
      this.capturarPosicionesMouse(event);
    });

    element.appendChild(this.app.view);

    const triangulo: Triangle = new Triangle(this.app.ticker, width /2 , height / 2);
    this.app.stage.addChild(triangulo);

    this.app.stage.addChild(new Rect(this.app.ticker, 80,100, this.random(0,1400), this.random(0,600)));

    const timerRect: TimerFijo = new TimerFijo(() => {
      this.app.stage.addChild(new Rect(this.app.ticker, 80,100, this.random(0,1400), -100));
    }, this.random(1000, 3000))


    const timerCircle: TimerFijo = new TimerFijo(() => {
      this.app.stage.addChild(new Circle(this.app.ticker,this.random(0,1500),this.random(0,900)));
    }, this.random(0,5000))
  }



  protected capturarPosicionesMouse(event: FederatedPointerEvent){
    this.mouseX = Math.round(event.data.global.x);
    this.mouseY = Math.round(event.data.global.y);

    //console.log(this.mouseX + " " + "y" + " " +  this.mouseY);
  }

}
