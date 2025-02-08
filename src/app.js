import './styles.css';
import { ContextMenu } from './menu';
import { TimerModule } from './modules/timer.module';

const contextMenu = new ContextMenu('#menu');

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
const timer = new TimerModule();
contextMenu.add(timer);
