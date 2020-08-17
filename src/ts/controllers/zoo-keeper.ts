import {Animal} from '../models/animal';

export class ZooKeeper {
    introduceAnimal(type: string, name: string, sound: string) {
        const animal = new Animal({type, name, sound});
        const el = document.getElementById('greeting');
        if(el) {
            el.innerText = animal.sayHello();
        }
    }
}