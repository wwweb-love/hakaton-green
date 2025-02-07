import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.initContextMenu();
      }
    
  initContextMenu() {
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault();
      const { clientX, clientY } = event;
      this.open(clientX, clientY);
    });
  }

  open(x, y) {
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
    this.el.style.display = 'block';
    this.el.style.position = 'absolute'; 
  }

  close() {
    this.el.style.display = 'none';
  }

  add(item) {
    this.el.insertAdjacentHTML('beforeend', item.toHTML());
    
    const $listItem = this.el.querySelector(`[data-type="${item.type}"]`);
    $listItem.addEventListener('click', () => {
        item.trigger();
    });
  }
}