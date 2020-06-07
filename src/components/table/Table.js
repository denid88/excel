import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@/core/ExcelComponent';

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
    console.log('mousedown', e.target.dataset.resize);
  }
/*
  onClick(e) {
    console.log('click', e.target);
  }

  onMousedown() {
    console.log('mousedown');
  }

  onMousemove() {
    console.log('mousemove');
  }

  onMouseup() {
    console.log('mouseup');
  }
  */
}
