import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module'

const contextMenu = new ContextMenu('#menu');
const clicksModule = new ClicksModule('type', 'text')

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
contextMenu.add(clicksModule)