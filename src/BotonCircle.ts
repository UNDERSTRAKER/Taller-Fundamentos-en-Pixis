import {Graphics, Ticker} from "pixi.js";
import Circle from "./Circle";


export default class BotonCircle extends Graphics{

  protected _circulos: Circulos[];
  protected  opacidad: number;
  protected color:number;

  constructor(ticker: Ticker,x: number, y:number, rectangulos:Circulos[]) {
    super();
    this.x = x;
    this.y = y;
    this._circulos = rectangulos;
    this.opacidad = 1.00;
    this.color = 0;


    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.clickeado);

    ticker.add(() => {

      this.dibujar();
    })

  }

  protected dibujar() {
    this.clear();
    this.beginFill(0x800000);
    this.drawRect(800,700,50,50);
    this.endFill();
  }

  protected clickeado() {
    this.color = 1;

  }
  public cambioDeColor(){
    switch (this.color){
      case 0:

        this.beginFill(0xFF0000, this.opacidad);
        break;

      case 1:

        this.beginFill(0x0000FF, this.opacidad);
        break;

      case 2:

        this.beginFill(0xFFFF00, this.opacidad);
        break;
    }

    this.opacidad -= 0.005;
  }

  public get circulos(): Circulo[]{
    return this._circulos.reverse();
  }

  public set circulos(circulos: Circulos[]) {
    this._circulos = circulos;
  }
}
