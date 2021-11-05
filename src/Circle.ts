import {Graphics, Ticker} from "pixi.js";
import TimerFijo from "./TimerFijo";
import BotonCircle from "./BotonCircle";


export default class Circle extends Graphics {
  protected anchoCircle: number;
  protected opacidad: number;
  protected crecer: boolean;
  protected color: number;
  protected ticker: Ticker;




  constructor(ticker: Ticker, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.anchoCircle = 75;
    this.opacidad = 1.00;
    this.crecer = true;
    this.color = 0;


    this.interactive = true;
    this.buttonMode = true;

    this.on('click', this.encoger);

    this.ticker = ticker;
    ticker.add(this.onTickerUpdate, this);

    const timer = new TimerFijo(() => {
      this.desaparecer();
    }, Math.floor(Math.random() * (10 - 6) + 6) * 1000)

  }

  protected onTickerUpdate(){
    this.dibujar();
    this.revisarSiDesaparece();
    this.disminuir();

  }

  public dibujar() {
    this.clear();

      this.cambioDeColor();
      //this.beginFill(0x000000);
      this.drawCircle(60, 60, this.anchoCircle);
      this.endFill();


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

  protected revisarSiDesaparece(): void {
    if(this.y > 1000){
      this.desaparecer();
    }
  }

  protected desaparecer(): void {
    this.parent.removeChild(this);
    this.ticker.remove(this.onTickerUpdate, this);
  }

  public disminuir(): void {
    if(this.crecer) {
      this.anchoCircle += 0.125;
    } else {
      this.anchoCircle -= 2;
    }
  }

  public encoger(): void {
    this.crecer = false;
  }

}
