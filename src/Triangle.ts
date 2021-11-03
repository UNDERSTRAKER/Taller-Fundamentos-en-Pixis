import {Graphics, Ticker, Point} from 'pixi.js';
import Canvas from "./canvas";

export default class Triangle extends Graphics {

  protected aparecido: boolean = true;
  protected girar: boolean = true;
  protected tiempo: number = 10;



  constructor(ticker: Ticker, x: number, y: number) {
    super();

    this.x = x;
    this.y = y;
    this.pivot.set(50, 50);
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.clicked);


    ticker.add(() => {
      this.draw();
      this.rotar();
    });

  }

  public draw(): void {
    this.clear();
    this.dibujarNave();

  }

  protected dibujarNave() {
    if (this.aparecido) {
      this.beginFill(0x008000);
      this.drawPolygon([
        new Point(50, 0),
        new Point(0, 100),
        new Point(100, 100)
      ])
      this.endFill();
    }

  }

  public rotar(): void {
    if (this.girar) {
      this.angle += 1;
    } else {
      this.angle -= 1;
    }


  }

  public clicked() {
    this.girar = !this.girar;

  }

  protected contador() {
    if (this.tiempo >= 0) {
      this.tiempo--;
    }
    if (this.tiempo == 0) {
      this.aparecido = !this.aparecido;
    }
  }
}
