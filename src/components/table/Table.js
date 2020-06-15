import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@/core/ExcelComponent';
import {getCoords} from '@/components/table/table.actions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
      listeners: ['mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML() {
    return createTable(50);
  }

  onMousedown(e) {
    const element = getCoords(e.target.parentNode);
    const move = document.querySelector('.move');

    if (move === null) {
      const excelTableEl = document.querySelector('.excel__table');
      const div = document.createElement('div');
      div.classList.add('move');
      excelTableEl.appendChild(div);
      div.style.left = element.leftMax - 2 + 'px';
    }

    move.style.left = element.leftMax - 2 + 'px';
  }

  onMousemove(e) {
    console.log('mousemove');
    console.log(e.clientX);
    const move = document.querySelector('.move');
    if (move != null) {
      move.style.left = e.clientX - 2 + 'px';
    }
  }

  onMouseup(e) {
    console.log('mouseup');
    const excelTableEl = document.querySelector('.excel__table');
    const move = document.querySelector('.move');
    move.classList.remove('move');
    excelTableEl.removeChild(move);
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
