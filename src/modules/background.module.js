import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Изменение цвета фона');
    }
    trigger() {
        const randomColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`;
        document.body.style.backgroundColor = randomColor;
    }
}