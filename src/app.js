// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
import "./styles.css";
import { ContextMenu } from "./menu";
import { TimerModule } from "./modules/timer.module";
import { ShapeModule } from "../src/modules/shape.module";
import { AudioModule } from "./modules/audio.module";
import { CustomMessageModule } from "./modules/customMessage.module";
import { ClicksModule } from "./modules/clicks.module";
import { BackgroundModule } from "../src/modules/background.module";

import AddDomNotification from "./utiles/notification";

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
const contextMenu = new ContextMenu("#menu");
const timer = new TimerModule();
const shape = new ShapeModule("shape", "Случайная фигура");
const audio = new AudioModule();
const message = new CustomMessageModule("message", "Кастомное сообщение");
const click = new ClicksModule("click", "Аналитика кликов");
const background = new BackgroundModule();

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
AddDomNotification();

contextMenu.add(timer);
contextMenu.add(shape);
contextMenu.add(audio);
contextMenu.add(message);
contextMenu.add(click);
contextMenu.add(background);
