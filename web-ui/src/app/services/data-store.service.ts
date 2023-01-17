import { Injectable } from '@angular/core';
import { Dexie, Table } from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  readonly DB_NAME = 'SoundBoard';
  readonly database: Dexie;
  constructor() {
    this.database = new Dexie(this.DB_NAME);
    this.database.version(1).stores({
      files: '++id, name, type',
    });
    this.database.on('populate', () => this.populate());
  }

  async populate() {}
}
