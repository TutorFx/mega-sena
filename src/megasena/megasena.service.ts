import { Injectable } from '@nestjs/common';
import type { IPoolMegasena } from './megasena.interface';
import { ResultadoMegasena } from './megasena.entities';
import * as data from '../resources/dataset.json';

@Injectable()
export class MegasenaService {
  numbers: Array<number>;

  constructor() {
    this.numbers = new Array(60).fill(0);
  }

  getMegasena(this: MegasenaService): IPoolMegasena {
    this.numbers = new Array(60).fill(0);
    const pool: IPoolMegasena = data.map((resultado) => {
      Object.values(resultado).forEach((number) => {
        this.numbers[Number(number) - 1] += 1;
      });
      const result = new ResultadoMegasena(
        resultado[1],
        resultado[2],
        resultado[3],
        resultado[4],
        resultado[5],
        resultado[6],
      );
      result.organize();
      return result;
    });
    return pool;
  }
  getUsecase() {
    return Object.assign({}, this.numbers);
  }
}
