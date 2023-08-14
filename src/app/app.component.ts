import { Component } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  totalPages: number = 0;
  ngOnInit() {}

  /**
   * Page change callback, which is called when a page is changed (called multiple times)
   *
   * @param e number
   */
   pageChange(e: number) {
    console.log('(page-change)', e + '/' + this.totalPages);
  }

  /**
   * Get pdf information after it's loaded
   * @param pdf pdf document proxy
   */
   afterLoadComplete(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }
}
