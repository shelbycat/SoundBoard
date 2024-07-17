import { Injectable } from '@angular/core';
import { Dexie, liveQuery } from 'dexie';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private dataStore: DataStoreService) {}

  saveImage() {}
  saveImages() {}
}
