import './styles.css';
import { ContextMenu } from './menu';
import { ShapeModule } from '../src/modules/shape.module'
import { TimerModule } from './modules/timer.module';


// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
=======
const contextMenu = new ContextMenu('#menu');
const timer = new TimerModule();
const shape = new ShapeModule('shape', 'shape')


// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
contextMenu.add(timer);
contextMenu.add(shape)