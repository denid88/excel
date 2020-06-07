import {$} from '@/core/dom';
// Cоздаем класс главного компонента
export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }
  // Взять рут компонент
  getRoot() {
    const $root = $.create('div', 'excel');
    // В этой ф-и перебираем полученные компоненты переданные в options
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // Debug
      // if (component.name) {
      //  window['c' + component.name] = component;
      // }
      component.destroy();
      // У каждого дочернего компонента вызывает метод вывод HTML
      $el.html(component.toHTML());
      // Все складываем в корневой компонент в конец поочередно
      $root.append($el);
      return component;
    });
    return $root;
  }
  // Отрендерить компонент root
  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
