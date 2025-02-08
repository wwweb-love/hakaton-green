import "./styles.css";
import { ContextMenu } from "./menu";
import { CustomMessageModule } from "./modules/custom_message.module";

const contextMenu = new ContextMenu("#menu");

// здесь добавляем элементы в меню с помощью contextMenu.add(*экземпляр класса*)
const message = new CustomMessageModule("message", "Сообщение");
contextMenu.add(message);
