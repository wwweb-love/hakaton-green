import { Module } from '../core/module';
import { audioSources } from '../sounds/audio.source';

export class AudioModule extends Module {
    constructor() {
        super('audio', 'Случайный звук');
        this.initAudioModule();
      }

      initAudioModule(){
        const $audioItem = document.createElement('audio');
        this.$audioItem = $audioItem;
      }

     trigger(){
        const randomIndex = Math.floor(Math.random() * audioSources.length);
        this.$audioItem.src = audioSources[randomIndex];
        this.$audioItem.play();
      }
}