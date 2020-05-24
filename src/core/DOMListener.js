export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provider for DomListener!');
    }
    this.$root = $root;
  }
}

