import {ExcelComponent} from '@/core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return `
      <div class="row">
        <div class="row-info null">
        </div>
        <div class="row-data">
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-info">1</div>
        <div class="row-data">
          <div class="cell" spellcheck="false" contenteditable="true">A1</div>
          <div class="cell" spellcheck="false" contenteditable="true">B1</div>
          <div class="cell" spellcheck="false" contenteditable="true">C1</div>
        </div>
      </div>`;
  }
}
