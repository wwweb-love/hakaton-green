import './styles.css'
import { ContextMenu } from './menu';
import { AudioModule } from './modules/audio.module';

const contextMenu = new ContextMenu('#menu');

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
contextMenu.add(new AudioModule());
