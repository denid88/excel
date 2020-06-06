import {capitalize} from '@/core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provider for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    console.log(this.listeners, this.$root);
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      // console.log(method);
      // console.log(listener);
      // Тоже самое что и addEventListener
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`This method ${method} is not implemented in ${name}`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`;
}
