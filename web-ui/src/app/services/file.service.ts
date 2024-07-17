import { Injectable } from '@angular/core';
import { Dexie, liveQuery } from 'dexie';
import { DataStoreService } from './data-store.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private dataStore: DataStoreService) {}

  saveImage() {}
  saveImages() {}
  loadImages(): Observable<Data.Image[]> {
    return of();
  }
}
