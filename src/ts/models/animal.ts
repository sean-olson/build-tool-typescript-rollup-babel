import { IAnimalParams } from '../types/animal'


export class Animal {

    private _type: string;
    private _name: string;
    private _sound: string;

    constructor(params: IAnimalParams) {
        this._type = params.type;
        this._name = params.name;
        this._sound = params.sound;
    }

    sayHello(): string {
        return (`My name is ${this._name}, and I am a ${this._type}. Good day to you -- ${this._sound}!`);
    }
    
}