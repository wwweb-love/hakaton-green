import './styles.css'
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('#menu');

// здесь добавляем элементы в меню с помощью contextMenu.add
// этот элемент тут для примера
contextMenu.add({ text: 'first action', action: null });
