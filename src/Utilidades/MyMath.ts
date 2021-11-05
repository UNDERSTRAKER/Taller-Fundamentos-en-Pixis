export default class MyMath {

  public static random(min: number, max: number): number {
    const intervalo: number = max - min;
    const valor: number = Math.floor(Math.random() * intervalo);
    const valorFinal: number = valor + min;
    return valorFinal;
  }
}
