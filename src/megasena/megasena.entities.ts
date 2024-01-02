import { IResultadoMegasena } from './megasena.interface';

export class ResultadoMegasena implements IResultadoMegasena {
  result;

  constructor(
    a: string | number,
    b: string | number,
    c: string | number,
    d: string | number,
    e: string | number,
    f: string | number,
  ) {
    this.result = [
      Number(a),
      Number(b),
      Number(c),
      Number(d),
      Number(e),
      Number(f),
    ];
  }
  get() {
    return this.result;
  }
  organize() {
    this.result = this.result.sort((a: number, b: number) => {
      return a - b;
    });
  }
}
