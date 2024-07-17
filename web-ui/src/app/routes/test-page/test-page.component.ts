import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  imageUploadControl = new FormControl();
  newImages: Data.Image[] = [];
  // uploadedImages$: Observable<Data.Image[]> = this.fileService.;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  selectFiles(event: Event) {
    this.handleFiles((event.target as HTMLInputElement).files ?? undefined);
  }

  onDragOverPreview(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  catchUIDrop(event: DragEvent) {
    event.preventDefault();
    console.log('Caught UI Drop');
    console.log(event.dataTransfer);
    event.stopPropagation();
    event.preventDefault();
    this.handleFiles(event.dataTransfer?.files);
  }

  removePreview(image: Data.Image) {
    console.log('Hello World');
    let index = this.newImages.findIndex((value) => value === image);
    if (index !== -1) {
      this.newImages.splice(index, 1);
    }
  }

  handleFiles(files?: FileList) {
    if (!files) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file?.type.startsWith('image/')) {
        continue;
      }

      const img = document.createElement('img');
      img.classList.add('obj');
      // img.file = file;
      this.newImages.push();
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newImages.push({
          source: e.target?.result?.toString() || '',
          filename: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  uploadNewImages() {
    console.log(this.newImages);
  }
}
