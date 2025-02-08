import "./styles.css";
import { ContextMenu } from "./menu";
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from '../src/modules/shape.module'
import { AudioModule } from './modules/audio.module';
import { CustomMessageModule } from "./modules/custom_message.module";
import { ClicksModule } from './modules/clicks.module'


// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
const contextMenu = new ContextMenu('#menu');
const timer = new TimerModule();
const shape = new ShapeModule('shape', 'Случайная фигура')
const audio = new AudioModule()
const message = new CustomMessageModule("message", "Кастомное сообщение");
const click = new ClicksModule('click', 'Аналитика кликов')

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
contextMenu.add(timer);
contextMenu.add(shape)
contextMenu.add(audio);
contextMenu.add(message);
contextMenu.add(click)