import './styles.css';
import { ContextMenu } from './menu';
import { AudioModule } from './modules/audio.module';
import { ShapeModule } from '../src/modules/shape.module'
import { TimerModule } from './modules/timer.module';
import { BackgroundModule } from '../src/modules/background.module'
// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
const contextMenu = new ContextMenu('#menu');
const timer = new TimerModule();
const shape = new ShapeModule()
const audio = new AudioModule()
const background = new BackgroundModule()
// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
contextMenu.add(timer);
contextMenu.add(shape)
contextMenu.add(audio);
contextMenu.add(background);
