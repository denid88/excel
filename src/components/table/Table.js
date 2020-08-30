import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@/core/ExcelComponent';
// import {getCoords} from '@/components/table/table.actions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
      listeners: ['mousedown']
    });
  }

  toHTML() {
    return createTable(50);
  }

  onMousedown(e) {
  }

  onMousemove(e) {
  }

  onMouseup(e) {
  }
/*
  onClick(e) {
    console.log('click', e.target);
  }

  onMousedown() {
    console.log('mousedown');
  }
  */
}
