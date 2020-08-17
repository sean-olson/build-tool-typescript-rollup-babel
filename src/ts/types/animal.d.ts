export interface IAnimal {
    type: string;
    name: string;
    sound: string;
    sayHello(): string;
}

export interface IAnimalParams {
    type: string;
    name: string;
    sound: string;
}