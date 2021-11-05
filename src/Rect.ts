import {Graphics, Ticker} from "pixi.js";
import MyMath from "./Utilidades/MyMath";

export default class Rect extends Graphics{
  protected rectWidth: number;
  protected rectHeight: number;
  protected parado: boolean = true;




  constructor(ticker: Ticker, width: number, height: number, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.rectWidth = width;
    this.rectHeight = height;
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.vibrar);
    //this.on('pointerdown', this.pararVibrar);

    ticker.add(() => {
      this.dibujar();
      this.reiniciar();
      this.vibracion();
    })
  }

  public dibujar(): void {
    this.clear();
    this.beginFill(0x000000);
    this.drawRect(0, 0, this.rectWidth, this.rectHeight);
    this.endFill();
  }

  public vibracion(): void {
    if(this.parado === true){
      this.y += 1;
    } else {
      this.y -= 1;
      this.y += MyMath.random (-1,2);
      this.x += MyMath.random (-1,2);
    }}
    public reiniciar(){
      this.y += 1;
      if(this.y > 1500){
        this.y = -100;
      }
    }

    protected vibrar(): void {
   this.parado = !this.parado;
    }

}
