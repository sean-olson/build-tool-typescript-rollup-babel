export class Animal {
    private _type: string;
    private _name: string;
    private _sound: string;

    constructor(type: string, name: string, sound: string) {
        this._type = type;
        this._name = name;
        this._sound = sound;
    }

    sayHello() {
        alert(`My name is ${this._name}, and I am a ${this._type}. Good day to you -- ${this._sound}!`);
    }
}