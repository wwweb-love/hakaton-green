import './styles.css'
import { ContextMenu } from './menu';
import { ShapeModule } from '../src/modules/shape.module'

const contextMenu = new ContextMenu('#menu');

const shape = new ShapeModule('shape', 'shape')
contextMenu.add(shape)
// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)