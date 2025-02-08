import {Module} from '../core/module'

export class ShapeModule extends Module {
    constructor() {
        super('shape', 'Случайная фигура');
    }
    trigger() {
            const shapeTypes = ['square', 'circle', 'triangle'];
            const randomType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const size = Math.random() * 100 + 50; // Размер от 50 до 150
            const randomColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`;
    
            const shape = document.createElement('div');
            shape.className = `shape ${randomType}`;
            
            if (randomType === 'triangle') {
                shape.style.borderBottomColor = randomColor; // для треугольника
                shape.style.width = '0';
                shape.style.height = '0';
            } else {
                shape.style.backgroundColor = randomColor; // для квадратов и кругов
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
            }
    
            shape.style.left = `${Math.random() * (window.innerWidth - size)}px`;
            shape.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    
            document.body.appendChild(shape);
    
            setTimeout(() => {
                shape.style.opacity = '0';
                shape.addEventListener('transitionend', () => shape.remove());
            }, 2000);
        }
    }
