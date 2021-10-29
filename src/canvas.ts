import {Application} from 'pixi.js';

export default class Canvas {
  private app: Application;

  constructor(
    width: number,
    height: number,
    backgroundColor: number = 0xFFFFFF,
    element: HTMLElement = document.body
  ) {
    this.app = new Application({width, height, backgroundColor});
    element.appendChild(this.app.view);
  }
}
