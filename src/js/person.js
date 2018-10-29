export default class Person {
    
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hola me llamo ${this.name}`)
    }
}