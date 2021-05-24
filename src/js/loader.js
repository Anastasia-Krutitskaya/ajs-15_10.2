/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable prefer-arrow-callback */

import read from './reader';
import json from './parser';

export class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const response = await read();
        const value = await json(response);
        const valueParsed = JSON.parse(value);
        const obj = new GameSaving(valueParsed.id, valueParsed.created, valueParsed.userInfo);
        return obj;
      } catch (e) {
        return e;
      }
    })();
  }
}
