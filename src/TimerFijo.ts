export default class TimerFijo {
  protected timer: number;

  constructor(fn: Function, intervalo: number) {
    this.timer = window.setInterval(fn, intervalo);
  }

  detener() {
    clearInterval(this.timer)
  }


}
