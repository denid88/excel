import {createTable} from '@/components/table/table.template';
import {ExcelComponent} from '@/core/ExcelComponent';
// import {getCoords} from '@/components/table/table.actions';
import {$} from '@core/dom';

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
    if (e.target.dataset.resize) {
      console.log('Start resizing');
      const $resizer = $(e.target);
      console.log($resizer);
      const $parent = $resizer.closest('[data-type=resizable]');
      const coords = $parent.getCoords();
      document.onmousemove = (e) => {
        // console.log('onmousemove');
        const delta = Math.floor(e.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => el.style.width = value + 'px');
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
  /*
    onMousemove(e) {

    }

    onMouseup(e) {
    }

    onClick(e) {
      console.log('click', e.target);
    }

    onMousedown() {
      console.log('mousedown');
    }
    */
}
